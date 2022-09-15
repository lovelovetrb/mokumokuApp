import React, { useState } from 'react'
import { db } from '../Auth/firebase'
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from 'react';
import '../css/timeLine.css'

const TimeLine = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todoData = collection(db, 'todo')
        onSnapshot(todoData, (snapshot) => {
            setTodos(snapshot.docs.map((doc) => {
                return ({ ...doc.data() })
            }))
        });

    }, [])

    return (
        <div className='TimeLine'>
            <h4 >タイムライン</h4>
            {todos.map((todo, index) => {
                const dueDate = todo.date.toDate();
                var formattedDate = `${dueDate.getFullYear()}-${dueDate.getMonth() + 1}-${dueDate.getDate()}`.replace(/\n|\r/g, '');
                return (
                    <>
                        <p key={index}>
                            <time>
                                {formattedDate}
                            </time>
                            {todo.name}さんが
                            もくもくリストに 「{todo.content}」 を追加しました
                            <br />
                            進捗は  {todo.progress}  のようです
                        </p>
                    </>
                )
            })}

        </div>
    )
}

export { TimeLine }

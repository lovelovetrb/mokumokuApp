import React, { useState } from 'react'
import { demo } from '../Db/Data'
import { db } from '../Auth/firebase'
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useEffect } from 'react';

const TaskList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todoData = collection(db, 'todo')
        onSnapshot(todoData, (snapshot) => {
            setTodos(snapshot.docs.map((doc) => {
                return ({ ...doc.data() })
            }))
        });

    }, [])

    // 修正の挙動を追加
    function clickButton(index) {
        console.log(index)
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div style={{ width: '50%' }
        } className='TaskList'>
            <h4>もくもくリスト</h4>
            <table>
                <thead>
                    <tr>
                        <th>日付</th><th>内容</th><th>進捗</th><th>内容の変更</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => {
                        const dueDate = todo.date.toDate();
                        var formattedDate = `${dueDate.getFullYear()}-${dueDate.getMonth() + 1}-${dueDate.getDate()}`.replace(/\n|\r/g, '');
                        return (
                            <tr key={index}>
                                <td>
                                    <time>
                                        {formattedDate}
                                    </time>
                                </td>
                                <td>{todo.content}</td>
                                <td>{todo.progress}</td>
                                <td><button onClick={() => clickButton(index)}>変更</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export { TaskList }

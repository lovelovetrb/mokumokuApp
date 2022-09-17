import React, { useState } from 'react'
import { db } from '../Auth/firebase'
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect } from 'react';
import { auth } from '../Auth/firebase'


const TaskList = (props) => {
    const [todos, setTodos] = useState([])
    const list = []

    function clickButton(todo, index) {
        props.handleClickedEditButton(todo)
    }

    useEffect(() => {
        getData('UID', '==', auth.currentUser.uid)
    }, [props.todoData])

    async function getData(UID, operator, dataValue) {
        const todoRef = collection(db, 'todo')
        const q = query(todoRef, where(UID, operator, dataValue))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            list.push(doc.data())
        });
        setTodos(list)
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
                    {todos.sort(
                        (a, b) => {
                            const aDate = a.date
                            const bDate = b.date
                            if (aDate < bDate) {
                                return 1;
                            }
                            if (aDate > bDate) {
                                return -1;
                            }
                        }
                    ).map((todo, index) => {
                        const dueDate = todo.date.toDate();
                        const formattedDate = `${dueDate.getFullYear()}-${dueDate.getMonth() + 1}-${dueDate.getDate()}`.replace(/\n|\r/g, '');
                        return (
                            <tr key={todo.todoNum}>
                                <td>
                                    <time>
                                        {formattedDate}
                                    </time>
                                </td>
                                <td>{todo.content}</td>
                                <td>{todo.progress}</td>
                                <td><button onClick={() => clickButton(todo, index)}>変更</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export { TaskList }

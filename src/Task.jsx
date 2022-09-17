import React from 'react'
import { useState } from 'react'
import { TaskList } from './components/TaskList'
import { TaskRegister } from './components/TaskRegister'
import { addDoc, collection, updateDoc, setDoc, doc, Timestamp, query, where, getDocs } from "firebase/firestore";
import { auth } from './Auth/firebase'
import { db } from './Auth/firebase'

const Task = () => {
    const [data, setData] = useState();
    const [editableFlag, setEditableFlag] = useState(false);

    const N = 30;
    const todoNum = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(N)))).substring(0, N)

    const registTodo = (data) => {
        const docData = {
            content: data.content,
            date: Timestamp.fromDate(new Date(data.date)),
            progress: data.progress,
            UID: auth.currentUser.uid,
            name: auth.currentUser.displayName,
            todoNum: todoNum
        }
        console.log(docData)
        const colRef = collection(db, 'todo')
        addDoc(colRef, docData)
            .then(alert('もくもくリストに追加されました！'))
            .catch((e) => alert(`書き込み時にエラーが発生しました\n${e}`))
        setData(docData)
    }

    const editTodo = async (data) => {
        const todosRef = collection(db, 'todo')
        const q = query(todosRef, where('todoNum', '==', data.todoNum))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((document) => {
            setDoc(doc(db, "todo", document.id), {
                content: data.content,
                date: Timestamp.fromDate(new Date(data.date)),
                progress: data.progress
            }, { merge: true })
                .then(alert('データを更新しました！'))
                .catch((e) => alert(`書き込み時にエラーが発生しました\n${e}`))
        });
        setEditableFlag(false)
        setData(data)
    }

    const handleClickedEditButton = (data) => {
        setEditableFlag(true)
        setData(data)
    }


    return (
        <>
            <TaskRegister
                todoData={data}
                registTodo={registTodo}
                editTodo={editTodo}
                editableFlag={editableFlag}
            ></TaskRegister>
            <TaskList
                todoData={data}
                handleClickedEditButton={handleClickedEditButton}
            ></TaskList>
        </>
    )


}

export default Task

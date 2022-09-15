import React from 'react'
import '../css/task.css'
import { useForm } from 'react-hook-form'
import { auth } from '../Auth/firebase'
import { useState, useEffect } from 'react'
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from '../Auth/firebase'



export const TaskRegister = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState();

    const onSubmit = (d) => {
        setData(d)
    }

    useEffect(() => {
        if (data !== undefined) {
            const docData = {
                content: data.todo,
                date: Timestamp.fromDate(new Date(data.date)),
                progress: data.progress,
                UID: auth.currentUser.uid,
                name: auth.currentUser.name
            }

            const colRef = collection(db, 'todo')
            addDoc(colRef, docData)

        }
    }, [data])

    return (
        <div style={{ width: '50%' }
        } className='TaskRegister'>
            <h4>今日は何をもくもくしよう？</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" {...register("UID")} value={auth.currentUser.uid} />
                <div>
                    <label htmlFor="">日付</label>
                    <input type="date" {...register("date")} required />
                </div>
                <div>
                    <label htmlFor="">内容</label>
                    <input type="text" {...register("todo")} required />
                </div>
                <div>
                    <label htmlFor="">進捗</label>
                    <select {...register("progress")}>
                        <option>達成！</option>
                        <option>後少し...</option>
                        <option>未完了</option>
                    </select>
                </div>
                <button type='submit'>リストに追加</button>
            </form>
        </div >
    )
}



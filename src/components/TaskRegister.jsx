import React from 'react'
import '../css/task.css'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'


export const TaskRegister = (props) => {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        reset()
    }, [props.editableFlag])

    const onClickAddButton = (d) => {
        props.registTodo(d)
        reset()
    }

    const onClickEditButton = (d) => {
        const newData = { ...props.todoData }
        newData.date = d.date
        newData.content = d.content
        newData.progress = d.progress
        props.editTodo(newData)
    }

    const formatDate = () => {
        const dueDate = props.todoData.date.toDate();
        var y = dueDate.getFullYear();
        var m = ('00' + (dueDate.getMonth() + 1)).slice(-2);
        var d = ('00' + dueDate.getDate()).slice(-2);
        return (y + '-' + m + '-' + d);
    }

    if (props.editableFlag) {
        setValue('date', formatDate())
        setValue('content', props.todoData.content)
        setValue('progress', props.todoData.progress)
    }

    return (
        <div style={{ width: '50%' }
        } className='TaskRegister'>
            <h4>今日は何をもくもくしよう？</h4>
            <form>
                <div>
                    <label htmlFor="">日付</label>
                    <input type="date" {...register("date", { required: '↑日付を入力してね' })} required />
                    <p style={{
                        color: 'red',
                        fontSize: '1.3rem',
                        margin: '0 auto'
                    }}>{errors.date?.message}</p>
                </div>
                <div>
                    <label htmlFor="">内容</label>
                    <input type="text" {...register("content", { required: '↑もくもくの内容を入力してね' })} required />
                    <p style={{
                        color: 'red',
                        fontSize: '1.3rem',
                        margin: '0 auto'
                    }}>{errors.content?.message}</p>
                </div>
                <div>
                    <label htmlFor="">進捗</label>
                    <select {...register("progress", { required: true })}>
                        <option>達成！</option>
                        <option>後少し...</option>
                        <option>未完了</option>
                    </select>
                </div>
                {
                    props.editableFlag
                        ? <button onClick={handleSubmit(onClickEditButton)} type='submit'>変更</button>
                        : < button onClick={handleSubmit(onClickAddButton)} type='submit'>リストに追加</button>
                }
            </form>
        </div >
    )
}




import { useEffect, useState } from 'react'
import TodoCards from './TodoCards'
import './styles/FormTodos.css'
import useFetch from '../hooks/useFetch'
import { useForm } from 'react-hook-form'

const FormTodos = () => {

  const { register, reset, handleSubmit } = useForm()

  const [isCompleteScreen, setIsCompleteScreen] = useState(false)

  const  { infoApi, getAllTodos, postTodos, updateTodos } = useFetch()

  const [modify, setModify] = useState()
 
  const handleScreenOff = () => {
    setIsCompleteScreen(false)
  }

  const handleScreenOn = () => {
    setIsCompleteScreen(true)
  }

  useEffect(() => {
    if (isCompleteScreen) {
      getAllTodos('/todos/true')     

    } else {
      getAllTodos('/todos/false')            
    }
  }, [isCompleteScreen, infoApi])

  const submit = data => {

    if (modify) {
      updateTodos('/todos/', data, modify.id)
      setModify()       
    } else {
      postTodos('/todos', data)           
    }

    reset({
      title: '',
      description: ''
    })

  }


  return (
    <div className='todos'>
      <form onSubmit={handleSubmit(submit)} className='todos__form'>
        <div className='form__header'>
          <div className='form__item'>
            <label htmlFor='title' className='form__label'>Title</label>
            <input required id='title' {...register('title')} className='form__input' type="text" placeholder="what's the task title?" />
          </div>
          <div className='form__item'>
            <label htmlFor='description' className='form__label' >Description</label>
            <input id='description' {...register('description')} className='form__input' type="text" placeholder="what's the task description?" />
          </div>
        </div>
        <div className='form__item'>
          <button className='form__btn' type='submit'>Add</button>          
        </div>
      </form>
      <div className='todos__btn-container'>
        <button className={`btn ${isCompleteScreen === false && 'active'}`} onClick={handleScreenOff} type='button'>To Do</button>
        <button className={`btn ${isCompleteScreen === true && 'active'}`} onClick={handleScreenOn} type='button'>Completed</button>
      </div>
      <div className='todos__list'>
        {  
          infoApi?.map( toDo => (
            <TodoCards 
              key={toDo.id}
              toDo={toDo}
              isCompleteScreen={isCompleteScreen}
              reset={reset}
              setModify={setModify}
            />        
          ))         
        }
        
      </div>
    </div>
  )
}

export default FormTodos
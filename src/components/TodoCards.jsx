import './styles/TodoCards.css'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsCheckLg } from 'react-icons/bs'
import { LiaEdit } from 'react-icons/lia'
import { GiReturnArrow } from 'react-icons/gi'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setIsCompleteG } from '../store/slices/modalComplete.slice'

const TodoCards = ({ toDo, isCompleteScreen, reset, setModify }) => {

  const dateCreate = new Date(toDo.createdAt)
  const dateCompleted = new Date(toDo.updatedAt)
  const { DeletedTodos, completedTodos } = useFetch()
  const dispatch = useDispatch()

  const handleReturn = () => {

    const data = {
      completed: false
    }

    completedTodos(`/todos/`, data, toDo.id)
  }

  const handleCheck = () => {

    const data = {
      completed: true
    }

    completedTodos(`/todos/`, data, toDo.id)
    dispatch(setIsCompleteG(true))

  }
  
  const handleDelete = () => { 
    DeletedTodos(`/todos/`, toDo.id)
  }

  const handleModify = () => { 
    setModify({
      id: toDo.id
    })
    reset({
      title: toDo.title,
      description: toDo.description
    })
  }
  
  return (
    <div className='card'>
      <div className='card__item'>
        <h2 className='card__title'>{toDo.title}</h2>
        <p className='card__description'>{toDo.description}</p>
        <p className='card__date'>{isCompleteScreen ? `Completed: ${dateCompleted.toLocaleDateString()}` : `Create: ${dateCreate.toLocaleDateString()}`}</p>
      </div>
      <div className='card__btn'>
        {
          isCompleteScreen 
          ?
          (
            <>
            <AiOutlineDelete className='delete__btn  icon' onClick={handleDelete} />
            <GiReturnArrow className='delete__btn  icon' onClick={handleReturn}/>
            </>
            
          ) 
          :
          (
            <>
              <LiaEdit className='edit__btn icon' onClick={handleModify}/>
              <AiOutlineDelete className='delete__btn  icon' onClick={handleDelete} />
              <BsCheckLg className='check__btn  icon' onClick={handleCheck}/>            
            </>
            
          )
        }
        </div>
    </div>
  )
}

export default TodoCards
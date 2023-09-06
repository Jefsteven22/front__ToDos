import'./styles/ModalPost.css'
import { useDispatch, useSelector } from 'react-redux'
import { setIsActiveG } from '../../store/slices/modal.slice'

const ModalPost = () => {

  const dispatch = useDispatch()
  const isActive = useSelector(reducer => reducer.isActive)

  const handleClosed = () => { 
    dispatch(setIsActiveG(false)) 
  }

  return (
    <div className={`modal ${isActive ? 'modalActive' : '' }`}>
      <div className="modal__container">
        <h2 className="modal__title">Task created successfully</h2>
        <button onClick={handleClosed} className="modal__btn" type="button">Accept</button>
      </div>
    </div>
  )
}

export default ModalPost
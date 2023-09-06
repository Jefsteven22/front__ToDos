import { useDispatch, useSelector } from "react-redux"
import { setIsCompleteG } from "../../store/slices/modalComplete.slice"


const ModalComplete = () => {

  const dispatch = useDispatch()
  const isCompleted = useSelector(reducer => reducer.isCompleted)

  const handleClosed = () => { 
    dispatch(setIsCompleteG(false)) 
  }

  return (
    <div className={`modal ${isCompleted ? 'modalActive' : '' }`}>
      <div className="modal__container">
        <h2 className="modal__title">Task Completed successfully</h2>
        <button onClick={handleClosed} className="modal__btn" type="button">Accept</button>
      </div>
    </div>
  )
}

export default ModalComplete
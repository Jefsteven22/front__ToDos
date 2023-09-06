// Reusing classes from ModalPost.css
import { useDispatch, useSelector } from "react-redux"
import { setIsUpdateG } from "../../store/slices/modalUpdate.slice"

const ModalUpdate = () => {

  const isUpdate = useSelector(reducer => reducer.isUpdate)
  const dispatch = useDispatch()

  const handleClosed = () => { 
    dispatch(setIsUpdateG(false))
  }

  return (
    <div className={`modal ${ isUpdate ? 'modalActive' : '' }`}>
      <div className="modal__container">
        <h2 className="modal__title">Task edited successfully</h2>
        <button onClick={handleClosed} className="modal__btn" type="button">Accept</button>
      </div>
    </div>
  )
}

export default ModalUpdate
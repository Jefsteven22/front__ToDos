import { useDispatch, useSelector } from "react-redux"
import { setIsDeleteG } from "../../store/slices/modalDelete.slice"


const ModalDelete = () => {

  const isDelete = useSelector(reducer => reducer.isDelete)
  const dispatch = useDispatch()

  const handleClosed = () => { 
    dispatch(setIsDeleteG(false))
  }

  return (
    <div className={`modal ${ isDelete ? 'modalActive' : '' }`}>
      <div className="modal__container">
        <h2 className="modal__title">Task deleted successfully</h2>
        <button onClick={handleClosed} className="modal__btn" type="button">Accept</button>
      </div>
    </div>
  )
}


export default ModalDelete
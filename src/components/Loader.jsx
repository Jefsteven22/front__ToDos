import { useSelector } from 'react-redux'
import './styles/Loader.css'

const Loader = () => {

  const isLoader = useSelector(reducer => reducer.isLoader)

  return (
    <div className={ `loader__container ${isLoader ? 'loader__active' : '' }`}>
      <div className="loader">
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      <div className="loader-square"></div>
      </div>
    </div>
  )
}

export default Loader

import './App.css'
import FormTodos from './components/FormTodos'
import Loader from './components/Loader'
import ModalComplete from './components/modals/ModalComplete'
import ModalDelete from './components/modals/ModalDelete'
import ModalPost from './components/modals/ModalPost'
import ModalUpdate from './components/modals/ModalUpdate'

function App() {

  return (
    <div className='app'>
      <h1 className='app__title'>My Todos</h1>
      <FormTodos />
      <ModalPost />
      <ModalUpdate />
      <ModalDelete />
      <ModalComplete />
      <Loader />
    </div>
  )
}

export default App

import { configureStore } from "@reduxjs/toolkit";
import isActive from './slices/modal.slice'
import isUpdate from './slices/modalUpdate.slice'
import isDelete from './slices/modalDelete.slice'
import isCompleted from './slices/modalComplete.slice'
import isLoader from './slices/loader.slice'


export default configureStore({
  reducer: {
    isActive,
    isUpdate,
    isDelete,
    isCompleted,
    isLoader
  }
})
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsActiveG } from "../store/slices/modal.slice";
import { setIsUpdateG } from "../store/slices/modalUpdate.slice";
import { setIsDeleteG } from "../store/slices/modalDelete.slice";
import { setIsLoaderG } from "../store/slices/loader.slice";


const useFetch = () => {
  const dispatch = useDispatch()
  const [infoApi, setInfoApi] = useState();
  const baseUrl = 'https://db-todos-twu7-dev.fl0.io'

  // GET
  const getAllTodos = (path) => {
    const url = `${baseUrl}${path}`
    axios
      .get(url)
      .then((res) => {
        dispatch(setIsLoaderG(true))
        setInfoApi(res.data)
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setIsLoaderG(false)))
      
  };

  // UPDATE
  const updateTodos = (path, data, id) => { 
    dispatch(setIsLoaderG(true))
    const url = `${baseUrl}${path}${id}`;
    axios
      .put(url, data)
      .then((res) => {
        const infoApiMapped = infoApi?.map( e => e.id === id ? res.data : e)
        setInfoApi(infoApiMapped)
        dispatch(setIsUpdateG(true))
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setIsLoaderG(false)))     
  }

  // UPDATE CHECK TASK
  const completedTodos = (path, data, id) => { 
    dispatch(setIsLoaderG(true))
    const url = `${baseUrl}${path}${id}`;
    axios
      .patch(url, data)
      .then((res) => {
        const infoApiMapped = infoApi?.map( e => e.id === id ? res.data : e)
        setInfoApi(infoApiMapped)
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setIsLoaderG(false)))      
  }

  // DELETE
  const DeletedTodos = (path, id) => { 
    dispatch(setIsLoaderG(true))
    const url = `${baseUrl}${path}${id}`;
    axios
      .delete(url)
      .then((res) => {
        const infoApifiltered = infoApi?.filter( e => e.id !== id)
        setInfoApi(infoApifiltered)
        dispatch(setIsDeleteG(true))
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setIsLoaderG(false)))       
  }

  // POST 
  const postTodos = (path, data) => { 
    const url = `${baseUrl}${path}`;    
    dispatch(setIsLoaderG(true))
    axios
      .post(url, data)
      .then((res) => {
        setInfoApi([...infoApi, res.data])
        dispatch(setIsActiveG(true))
      })
      .catch((err) => console.error(err))
      .finally(() => dispatch(setIsLoaderG(false)))
  } 

  return { infoApi, getAllTodos, updateTodos, DeletedTodos, postTodos, completedTodos }
};

export default useFetch;

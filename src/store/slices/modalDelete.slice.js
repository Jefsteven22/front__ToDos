import { createSlice } from '@reduxjs/toolkit';

const Delete = createSlice({
    name: 'isDelete',
    initialState: false,
    reducers: {
      setIsDeleteG: (state, action) => action.payload
    }
})

export const { setIsDeleteG } = Delete.actions;

export default Delete.reducer;
import { createSlice } from '@reduxjs/toolkit';

const update = createSlice({
    name: 'isUpdate',
    initialState: false,
    reducers: {
      setIsUpdateG: (state, action) => action.payload
    }
})

export const { setIsUpdateG } = update.actions;

export default update.reducer;

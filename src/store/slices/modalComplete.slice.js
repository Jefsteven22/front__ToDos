import { createSlice } from '@reduxjs/toolkit';

const completed = createSlice({
    name: 'isCompleted',
    initialState: false,
    reducers: {
      setIsCompleteG: (state, action) => action.payload
    }
})

export const { setIsCompleteG } = completed.actions;

export default completed.reducer;

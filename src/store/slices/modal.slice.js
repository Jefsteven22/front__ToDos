import { createSlice } from '@reduxjs/toolkit';

const modal = createSlice({
    name: 'isActive',
    initialState: false,
    reducers: {
      setIsActiveG: (state, action) => action.payload
    }
})

export const { setIsActiveG } = modal.actions;

export default modal.reducer;

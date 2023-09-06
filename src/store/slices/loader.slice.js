import { createSlice } from '@reduxjs/toolkit';

const loader = createSlice({
    name: 'isLoader',
    initialState: true,
    reducers: {
      setIsLoaderG: (state, action) => action.payload
    }
})

export const { setIsLoaderG } = loader.actions;

export default loader.reducer;

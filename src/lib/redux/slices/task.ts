import { createSlice } from '@reduxjs/toolkit';

// A slice for adding individual tasks in the list
export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    id: 0,
    name: '',
    starred: false,
    complete: false,
  },
  reducers: {
    editName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { editName } = taskSlice.actions;

export default taskSlice.reducer;

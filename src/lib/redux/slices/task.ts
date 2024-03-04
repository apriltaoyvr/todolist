import { createSlice } from '@reduxjs/toolkit';

// A slice for adding individual tasks in the list
// NOTE: Modifications to individual tasks are handled in the taskListSlice
// This slice is for the TaskAdder component
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

import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Task } from '@/types/task';

// A slice for modifying the array of tasks
export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    tasks: [
      { id: 0, name: 'Learn React', starred: false, complete: true },
      { id: 1, name: 'Learn Redux', starred: false, complete: false },
      { id: 2, name: 'Learn MongoDB', starred: false, complete: false },
      { id: 3, name: 'Learn Prisma', starred: false, complete: true },
    ],
  },
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const task = { ...action.payload, id: state.tasks.length + 1 };
      state.tasks.push(task);
    },
    removeTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
    toggleStarred: (state, action: PayloadAction<Task>) => {
      const taskToEdit = state.tasks.find(
        (task) => task.id === action.payload.id,
      );
      if (taskToEdit) {
        taskToEdit.starred = !taskToEdit.starred;
      }
    },
    toggleCompletion: (state, action: PayloadAction<Task>) => {
      const taskToEdit = state.tasks.find(
        (task) => task.id === action.payload.id,
      );
      if (taskToEdit) {
        taskToEdit.complete = !taskToEdit.complete;
      }
    },
  },
});

export const { addTask, removeTask, toggleStarred, toggleCompletion } =
  taskListSlice.actions;

export default taskListSlice.reducer;

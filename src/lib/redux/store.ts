import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/task';
import taskListReducer from './slices/taskList';

export const store = configureStore({
  reducer: {
    task: taskReducer,
    taskList: taskListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
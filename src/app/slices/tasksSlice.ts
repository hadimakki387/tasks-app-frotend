import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface TasksState {
  tasks: Task[];
  counter: number;
  expanded: boolean; 
}

const initialState: TasksState = {
  tasks: [],
  counter: 0,
  expanded: false, 
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setExpand: (state, action: PayloadAction<boolean>) => {
      state.expanded = action.payload;
    },
  },
});

export const { incrementCounter, setTasks, setExpand } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectCounter = (state: RootState) => state.tasks.counter;
export const selectExpand = (state: RootState) => state.tasks.expanded; 

export default tasksSlice.reducer;

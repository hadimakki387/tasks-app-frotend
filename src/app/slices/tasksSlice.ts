import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

interface TasksState {
  tasks: Task[];
  counter: number;
}

const initialState: TasksState = {
  tasks: [],
  counter: 0,
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
    
  },
});

export const { incrementCounter, setTasks } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectCounter = (state: RootState) => state.tasks.counter;


export default tasksSlice.reducer;

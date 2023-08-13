import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react'; // Import the setupListeners function
import { homeApi } from './api/apiSlice';


export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Add the tasks reducer
    [homeApi.reducerPath]: homeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware), // Add RTK-Query middleware
});

setupListeners(store.dispatch); // Attach the setupListeners function to the store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

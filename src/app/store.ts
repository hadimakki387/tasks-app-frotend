import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query/react'; // Import the setupListeners function


export const store = configureStore({
  reducer: {
  
  },

});

setupListeners(store.dispatch); // Attach the setupListeners function to the store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

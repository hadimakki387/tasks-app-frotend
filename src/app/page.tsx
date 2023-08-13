'use client'

import App from '@/components/home/App'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { homeApi } from './api/apiSlice';
import { store } from "@/app/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <ApiProvider api={homeApi}>
      <Provider store={store}>
        <App/>
      </Provider>
    </ApiProvider>
      
  )
}

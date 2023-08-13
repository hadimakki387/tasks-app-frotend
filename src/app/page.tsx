'use client'

import App from '@/components/home/App'
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { homeApi } from './api/apiSlice';


export default function Home() {
  return (
      <App/>
  )
}

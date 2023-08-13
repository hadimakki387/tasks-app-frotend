"use client";

import App from "@/components/signUp/App";
import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { homeApi } from "@/app/api/apiSlice";

function page() {
  return (
    <ApiProvider api={homeApi}>
      <div className="h-screen">
        <App />
      </div>
    </ApiProvider>
  );
}

export default page;

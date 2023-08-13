"use client";

import React, { use, useEffect, useState } from "react";

import Link from "next/link";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Taskslogic from "./Taskslogic";
import { useCheckAuthQuery } from "@/app/api/apiSlice";
import Unauthorized from "../Unauthorized";

function App() {
  const token = localStorage.getItem("jwt");

  const { data, isSuccess, isLoading, isError, error } =
    useCheckAuthQuery(token);

  return (
    <div>
      {!isLoading && isSuccess ? (
        <>
          <Header />
          <CreateArea />
          <Taskslogic />
        </>
      ) : (
        <Unauthorized/>
      )}
    </div>
  );
}

export default App;

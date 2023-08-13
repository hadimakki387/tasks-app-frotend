"use client";

import React, { use, useEffect, useState } from "react";

import Link from "next/link";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Taskslogic from "./Taskslogic";

function App() {
  return (
    <div>
      <Header />
      <CreateArea/>
      <Taskslogic/>
    </div>
  );
}

export default App;

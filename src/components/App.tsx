"use client";

import React, { use, useEffect, useState } from "react";

import Link from "next/link";
import Header from "./Header";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea/>
    </div>
  );
}

export default App;

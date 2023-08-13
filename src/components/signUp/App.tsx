"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useSignUpMutation } from "@/app/api/apiSlice";


const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can't be longer than 20 characters"),
});

function App() {

  const [signUp , {data,isLoading,isError,isSuccess,error}] = useSignUpMutation()

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp({values})
    },
  });
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  useEffect(()=>{
    if(data && isSuccess){
      localStorage.setItem("jwt",data.token)
    }
  },[data,isSuccess,error])

  return (
    <div className="h-full flex flex-col justify-center items-center rounded-lg ">
      <h1 className="text-3xl mb-4 text-white font-semibold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg w-1/4 ">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
            value={values.name}
            onChange={handleChange}
          />
          {touched.name && errors.name ? (
            <div className="text-red-500">{errors.name}</div>
          ) : null}
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email ? (
            <div className="text-red-500">{errors.email}</div>
          ) : null}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password ? (
            <div className="text-red-500">{errors.password}</div>
          ) : null}
          
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            type="submit"
            className="bg-gray-500 px-4 py-2 font-semibold text-white rounded-lg hover:bg-slate-600 transition-all duration-300"
          >
            Submit
          </button>
          <Link href={"/sign-in"} className="font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default App;

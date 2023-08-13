"use client";

import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import { useSignInMutation } from "@/app/api/apiSlice";
import { useRouter } from "next/navigation";


const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password can't be longer than 20 characters"),
});

function App() {

  const router = useRouter()

  const [signIn,{data,isLoading,isSuccess,isError,error}] = useSignInMutation()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values)
    },
  });
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

    useEffect(()=>{
      if(data && !isError){
        localStorage.setItem("jwt",data.token)
        router.push("/")
      }
    },[data,isSuccess])
 

 
 
  return (
    <div className="h-full flex flex-col justify-center items-center rounded-lg ">
      <h1 className="text-3xl mb-4 text-white font-semibold">Sign In</h1>
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg w-1/4 ">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Email Address
          </label>
          <input
            type="text"
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
          {error && "status" in error && error.status === 404 ? (
            <div className="text-red-500">user not found</div>
          ) : null}
          {error && "status" in error && error.status === 400 ? (
            <div className="text-red-500">invalid credentials</div>
          ) : null}
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <button
            type="submit"
            className="bg-gray-500 px-4 py-2 font-semibold text-white rounded-lg hover:bg-slate-600 transition-all duration-300"
          >
            Submit
          </button>
          <Link href={"/sign-up"} className="font-semibold hover:underline">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default App;

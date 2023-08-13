"use client";

import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useFormik } from "formik";
import * as yup from "yup";
import { ClickAwayListener } from "@mui/base";
import { useAddTaskMutation } from "@/app/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter, setExpand } from "@/app/slices/tasksSlice";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  dueDate: yup.date().required("Due Date is required"),
  description: yup.string().required("Note description is required"),
});

function CreateArea() {

  const isExpanded = useSelector((state:any)=>state.tasks.expanded)
  const token = localStorage.getItem("jwt")
  const dispatch = useDispatch()
  const [addTask, { data, isLoading, error }] = useAddTaskMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      dueDate: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      
      dispatch(setExpand(false))
      formik.resetForm();
      addTask({...values,token:token})
      dispatch(incrementCounter())
    },
  });
 
  const { values, handleChange, handleSubmit, errors, touched } = formik;

  return (
    <div className="flex justify-center items-center rounded-md ">
      <ClickAwayListener
        onClickAway={() => {
          dispatch(setExpand(false))
        }}
      >
        <form onSubmit={handleSubmit} className=" mt-4 relative rounded-md">
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            onClick={() => {
              dispatch(setExpand(true))
            }}
            placeholder="Title"
            className={`w-full border-none p-4 outline-none text-xl resize-none rounded-t-md ${
              !isExpanded && "rounded-md"
            }`}
          />
          {isExpanded ? (
            <>
              <input
                name="dueDate"
                value={values.dueDate}
                onChange={handleChange}
                placeholder="Due Date"
                className="w-full border-none p-4 outline-none text-xl resize-none"
                type="date"
              />

              <textarea
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder="Note description..."
                rows={isExpanded ? 3 : 1}
                className="w-full border-none p-4 outline-none text-xl resize-none rounded-b-md"
              />
            </>
          ) : null}
          <div className="flex  justify-between">
            <div>
              {touched.title && errors.title ? (
                <div className="text-red-500">{errors.title}</div>
              ) : null}
              {touched.dueDate && errors.dueDate ? (
                <div className="text-red-500">{errors.dueDate}</div>
              ) : null}
              {touched.description && errors.description ? (
                <div className="text-red-500">{errors.description}</div>
              ) : null}
            </div>

            <div className="flex justify-end mr-4">
              {isExpanded ? (
                <Zoom in={true}>
                  <Fab type="submit" className="bg-white">
                    <AddIcon />
                  </Fab>
                </Zoom>
              ) : null}
            </div>
          </div>
        </form>
      </ClickAwayListener>
    </div>
  );
}

export default CreateArea;

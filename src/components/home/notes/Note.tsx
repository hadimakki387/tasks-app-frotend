"use client";

import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import Fab from "@mui/material/Fab";


import { useDispatch, useSelector } from "react-redux";

import TaskForm from "./TaskForm";

function Note({ task }: { task: any }) {

  const [isEditing, setIsEditing] = useState(false);
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  

  //here goes the editForm funtions
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const deleteTask = async (id: string) => {
    setIsEditing(false);
    
    
  };
  const editTaskFunction = async (e: any, id: string) => {
    setIsEditing(false);
    
  };

  const markTaskAsDone = (id: string) => {
   
  };

  return (
    <div className="flex flex-col gap-1 bg-white rounded-md p-3">
      {isEditing ? (
        <TaskForm
          initialValues={{
            title: task.title,
            description: task.description,
            dueDate: task.dueDate,
          }}
          onSubmit={(values) => {
            editTaskFunction(values, task._id);
          }}
        />
      ) : (
        <>
          <h1 className="text-lg break-words" onDoubleClick={handleEditClick}>
            {task.title}
          </h1>
          <p className="text-lg" onDoubleClick={handleEditClick}>
            {task.description}
          </p>
          <p className="text-lg" onDoubleClick={handleEditClick}>
            due date: {formatDate(task.dueDate)}
          </p>
          <p className="text-sm text-gray-600">
            {task.isDone ? <span className="flex items-center gap-4">Is Done <CheckIcon className="text-sm text-green-600 "/></span> : "Not Done"}
          </p>
          <div className="flex justify-between items-center mt-4">
          <div>
              {!task.isDone && (
                <Fab onClick={() => markTaskAsDone(task._id)}>
                  <CheckIcon />
                </Fab>
              )}
            </div>
            <div className="flex justify-end">
              <Fab
                onClick={() => {
                  deleteTask(task._id);
                }}
              >
                <DeleteIcon />
              </Fab>
            </div>
            
          </div>
        </>
      )}
    </div>
  );
}

export default Note;

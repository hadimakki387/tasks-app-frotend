import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CheckIcon from "@mui/icons-material/Check";

interface TaskFormProps {
  initialValues: {
    title: string;
    description: string;
    dueDate: string;
  };
  onSubmit: (values: any) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialValues, onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("description is required"),
      dueDate: Yup.string().required("Due date is required"),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          onChange={formik.handleChange}
          value={formik.values.title}
          className="border border-neutral-400 rounded-md p-2 w-full"
        />
        {formik.errors.title && formik.touched.title && (
          <div className="text-sm text-red-600">{formik.errors.title}</div>
        )}
      </div>
      <div>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          className="border border-neutral-400 rounded-md p-2 w-full"
        />
        {formik.errors.description && formik.touched.description && (
          <div className="text-sm text-red-600">{formik.errors.description}</div>
        )}
      </div>
      <div>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          placeholder="Due Date"
          onChange={formik.handleChange}
          value={formik.values.dueDate}
          className="border border-neutral-400 rounded-md p-2 w-full"
        />
        {formik.errors.dueDate && formik.touched.dueDate && (
          <div className="text-sm text-red-600">{formik.errors.dueDate}</div>
        )}
      </div>
      <div className="flex justify-end mt-2">
      <button
          type="submit"
          className="bg-neutral-200 hover:bg-white shadow-zinc-400 shadow-lg text-black  rounded-full h-12 w-12 flex justify-center items-center transition-all duration-200"
          onClick={formik.handleSubmit}
        >
           <CheckIcon className="" />
        </button>
      </div>
    </form>
  );
};

export default TaskForm;

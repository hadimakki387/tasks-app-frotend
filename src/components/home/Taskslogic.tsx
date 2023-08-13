import React, { useEffect, useState } from "react";
import Note from "./notes/Note";

function Taskslogic() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [cat, setCat] = useState("All");

  const handleCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCat(e.target.value);
  };
  const task = {
    title: "go out",
    description: "i want to go out today",
    dueDate: "2023-08-24T00:00:00.000+00:00",
  };

  return (
    <>
      <div>
        <div className="w-[20%] mx-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          ></label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleCat}
          >
            <option value="All" defaultChecked>
              All tasks
            </option>
            <option value="Done">Done Tasks</option>
            <option value="notDone">Not Done Tasks</option>
          </select>
        </div>
        <div className="flex flex-wrap justify-start items-center w-full">
          <div className="rounded-md w-1/4 p-4 max-[1520px]:w-1/3 max-[1000px]:w-1/2 max-[690px]:w-full">
            <Note task={task} />
          </div>
          <div className="rounded-md w-1/4 p-4 max-[1520px]:w-1/3 max-[1000px]:w-1/2 max-[690px]:w-full">
            <Note task={task} />
          </div>
          <div className="rounded-md w-1/4 p-4 max-[1520px]:w-1/3 max-[1000px]:w-1/2 max-[690px]:w-full">
            <Note task={task} />
          </div>
          <div className="rounded-md w-1/4 p-4 max-[1520px]:w-1/3 max-[1000px]:w-1/2 max-[690px]:w-full">
            <Note task={task} />
          </div>
        </div>
     <div className="min-[1520px]:absolute min-[1520px]:bottom-8 min-[1520px]:left-1/2 min-[1520px]:transform min-[1520px]:-translate-x-1/2 max-[1520px]:flex max-[1520px]:justify-center max-[1520px]:items-center max-[1520px]:my-8">
      <button
          className="px-4 py-2 rounded text-white font-semibold
                  bg-yellow-500"
        >
          1
        </button>
    </div>
        
      </div>
    </>
  );
}

export default Taskslogic;

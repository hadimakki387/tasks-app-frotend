import React, { useEffect, useState } from "react";
import Note from "./notes/Note";
import { useGetHomeDataQuery } from "@/app/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setTasks } from "@/app/slices/tasksSlice";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function Taskslogic() {

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [cat, setCat] = useState("All");
  const userID = "1234"
  const { data, isLoading, error, refetch } = useGetHomeDataQuery({
    page,
    limit,
    cat,
    userID
  });
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const counter = useSelector((state: any) => state.tasks.counter);

  console.log(counter)

useEffect(()=>{
  setTimeout(()=>{
      refetch()
  }, 500)
  refetch()
},[counter,refetch])

  useEffect(() => {
    if (data) {
      dispatch(setTasks(data.paginatedTasks));
    }
  }, [data, dispatch]);
  
  const handleCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCat(e.target.value);
  };
 

  return (
    <>
    {!isLoading &&<div>
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
        <TransitionGroup className="flex flex-wrap justify-start items-center w-full">
            {tasks.map((task, index: number) => {
              return (
                <CSSTransition key={index} timeout={300} classNames="fade">
                  <div
                    className="rounded-md w-1/4 p-4 max-[1520px]:w-1/3 max-[1000px]:w-1/2 max-[690px]:w-full"
                    key={index}
                  >
                    <Note task={task} />
                  </div>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
          <div className={`min-[1520px]:absolute min-[1520px]:bottom-8 min-[1520px]:left-1/2 min-[1520px]:transform min-[1520px]:-translate-x-1/2 max-[1520px]:flex max-[1520px]:justify-center max-[1520px]:items-center max-[1520px]:my-8`}>
            {Array.from({ length: data.totalPages }).map((_, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded text-white font-semibold ${
                  page === index + 1 && "bg-yellow-500"
                }`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
      </div> }
      
    </>
  );
}

export default Taskslogic;

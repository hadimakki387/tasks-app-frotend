import Link from 'next/link'
import React from 'react'

function Unauthorized() {
  return (
    <div className="h-screen flex  justify-center items-center ">
          <div className="text-3xl flex flex-col  bg-neutral-300 rounded-lg p-8 gap-8">
            {" "}
            <div>You are not authenticated</div>{" "}
            <div className="flex justify-center items-center gap-4 text-2xl">
              <Link
                href={"/sign-in"}
                className="py-3 px-6 bg-neutral-500 rounded-md text-white"
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className="py-3 px-6 bg-neutral-500 rounded-md text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
  )
}

export default Unauthorized
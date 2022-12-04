import React from "react";
import { table } from "../data";
import Tables from "./Tables";


const Table = () => {
  return (
    <>
      {/* desktop */}
      <section className="mb-8 mx-8 border border-[#d6ddeb] lg:flex flex-col gap-8 hidden">
        <h3 className="border-b border-b-[#d6ddeb] flex px-6 py-5 text-xl text-color-black-200 font-epilogue font-semibold">
          Recent Applications History
        </h3>

        {/* table */}
        <div className="grid grid-cols-1 px-6 ">
          {table.map((item, index) => {
            return <Tables item={item} key={index} />;
          })}
        </div>

        <div className="flex items-center justify-center gap-2 text-color-blue-200 pb-4">
          <h4 className="font-epilogue font-semibold">
            View all applications history
          </h4>
          <i className="ri-arrow-right-line ri-md "></i>
        </div>
      </section>

      {/* mobile */}
      <section className="mb-4 lg:hidden block">
        <h3 className="border-b border-b-[#d6ddeb] flex px-6 py-5 text-xl text-color-black-200 font-epilogue font-semibold mb-4">
          Recent Applications History
        </h3>

        {/* table */}
        <div className="grid grid-cols-1 px-6 ">
          {table.map((item, index) => {
            return <Tables item={item} key={index} />;
          })}
        </div>

        <div className="flex items-center gap-2 text-color-blue-200 pt-4 px-6">
          <h4 className="font-epilogue font-semibold">
            View all applications history
          </h4>
          <i className="ri-arrow-right-line ri-md "></i>
        </div>
      </section>
    </>
  );
};

export default Table;

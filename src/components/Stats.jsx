import React from "react";
import Img1 from '../images/icon2.png'
import Img2 from '../images/icon1.png'
import ProgressBar from "./ProgressBar";
import Avatar from '../images/imgTwo.png'

const Stats = () => {
  return (
    <>
      {/* desktop */}
      <section className="px-8 lg:flex flex-wrap w-full gap-6 h-full hidden">
        {/* box 1 */}
        <div className="basis-[200px] grow shrink  ">
          <div className="grid grid-cols-1 gap-6 ">
            <div className="relative w-full h-fit p-6 bg-white border border-[#d6ddeb] overflow-y-hidden flex flex-col justify-between gap-[20px]">
              <h3 className="font-epilogue font-semibold text-xl text-color-black-200 overflow-y-hidden">
                Total Jobs Applied
              </h3>
              <p className="text-7xl text-color-black-100 font-semibold font-epilogue h2-text overflow-y-hidden">
                45
              </p>
              <img src={Img1} alt="" className="absolute right-6 -bottom-1 " />
            </div>
            <div className="relative w-full h-fit p-6 bg-white border border-[#d6ddeb] overflow-y-hidden flex flex-col justify-between gap-[20px]">
              <h3 className="font-epilogue font-semibold text-xl text-color-black-200 overflow-y-hidden">
                Interviewed
              </h3>
              <p className="text-7xl text-color-black-100 font-semibold font-epilogue h2-text overflow-y-hidden">
                18
              </p>
              <img src={Img2} alt="" className="absolute right-6 -bottom-1 " />
            </div>
          </div>
        </div>

        {/* box 2 */}
        <div className="basis-[220px] grow shrink p-6 flex flex-col justify-between w-full bg-white border border-[#d6ddeb] overflow-y-hidden">
          <h3 className="font-epilogue font-semibold text-xl text-color-black-200 overflow-y-hidden">
            Jobs Applied Status
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div>
              <ProgressBar />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-[4px] bg-color-blue-200"></div>
                <div className="flex flex-col">
                  <h4 className="font-epilogue font-bold text-lg text-color-black-200">
                    60%
                  </h4>
                  <small className="text-color-black-200 font-epilogue text-sm">
                    Unsuitable
                  </small>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-[4px] bg-[#ccc]"></div>
                <div className="flex flex-col">
                  <h4 className="font-epilogue font-bold text-lg text-color-black-200">
                    40%
                  </h4>
                  <small className="text-color-black-200 font-epilogue text-sm">
                    Unsuitable
                  </small>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-color-blue-200 "
          >
            <span className="font-epilogue font-semibold">
              View All Applications
            </span>
            <i className="ri-arrow-right-line ri-md"></i>
          </button>
        </div>

        {/* box 3 */}
        <div className="basis-[310px] grow shrink  bg-white border border-[#d6ddeb] overflow-y-hidden">
          <h3 className="text-xl font-epilogue font-semibold text-color-black-100 pl-6 pt-7 pb-6 border-b border-b-[#d6ddeb]">
            Upcoming Interviews
          </h3>
          <div className="flex items-center justify-between px-6 py-[15.52px] border-b border-b-[#d6ddeb]">
            <span className="font-inter text-color-black-100 font-semibold">
              Today, <span className="font-normal">26 November</span>
            </span>
            <button className="flex gap-2 text-lg">
              <i className="ri-arrow-left-s-line text-color-black-50"></i>
              <i className="ri-arrow-right-s-line text-color-black-100"></i>
            </button>
          </div>
          <div className="flex flex-col gap-6 pl-6 pr-3 justify-center mt-6">
            <div className="flex items-center gap-4">
              <span className="font-inter text-color-black-50 font-medium text-sm w-[30%]">
                10:00 AM
              </span>
              {/* line */}
              <div className="h-[2px] bg-[#d6ddeb] w-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-inter text-color-black-50 font-medium text-sm ">
                10:30 AM
              </span>
              {/* img */}
              <div className="flex gap-2 items-center p-4 bg-color-blue-100 rounded-lg">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full bg-color-blue-200"
                />
                <div className="flex flex-col">
                  <h4 className="font-inter font-semibold text-color-black-200">
                    Joe Bartmann
                  </h4>
                  <small className="font-inter font-medium text-color-black-50">
                    HR Manager at Divvy
                  </small>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-inter text-color-black-50 font-medium text-sm w-[30%]">
                11:00 AM
              </span>
              {/* line */}
              <div className="h-[2px] bg-[#d6ddeb] w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* mobile */}
      <section className="px-8 grid md:grid-cols-2 grid-cols-1 lg:hidden gap-6 h-fit">
        {/* box1 */}
        <div className="relative  h-fit p-6 bg-white border border-[#d6ddeb] overflow-y-hidden flex flex-col justify-between gap-[20px]">
          <h3 className="font-epilogue font-semibold text-xl text-color-black-200 overflow-y-hidden">
            Total Jobs Applied
          </h3>
          <p className="text-7xl text-color-black-100 font-semibold font-epilogue h2-text overflow-y-hidden">
            45
          </p>
          <img src={Img1} alt="" className="absolute right-6 -bottom-1 " />
        </div>

        {/* box2 */}
        <div className="relative h-fit p-6 bg-white border border-[#d6ddeb] overflow-y-hidden flex flex-col justify-between gap-[20px]">
          <h3 className="font-epilogue font-semibold text-xl text-color-black-200 overflow-y-hidden">
            Interviewed
          </h3>
          <p className="text-7xl text-color-black-100 font-semibold font-epilogue h2-text overflow-y-hidden">
            18
          </p>
          <img src={Img2} alt="" className="absolute right-6 -bottom-1 " />
        </div>
        
        {/* box3 */}
        <div className="p-6 gap-3 bg-white border border-[#d6ddeb] flex flex-col justify-between h-fit">
          <h3 className="font-epilogue font-semibold text-xl text-color-black-200 overflow-y-hidden">
            Jobs Applied Status
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <ProgressBar />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-[4px] bg-color-blue-200"></div>
                <div className="flex flex-col">
                  <h4 className="font-epilogue font-bold text-lg text-color-black-200">
                    60%
                  </h4>
                  <small className="text-color-black-200 font-epilogue text-sm">
                    Unsuitable
                  </small>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-[4px] bg-[#ccc]"></div>
                <div className="flex flex-col">
                  <h4 className="font-epilogue font-bold text-lg text-color-black-200">
                    40%
                  </h4>
                  <small className="text-color-black-200 font-epilogue text-sm">
                    Unsuitable
                  </small>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 text-color-blue-200 "
          >
            <span className="font-epilogue font-semibold">
              View All Applications
            </span>
            <i className="ri-arrow-right-line ri-md"></i>
          </button>
        </div>

        {/* box4 */}
        <div className="bg-white border border-[#d6ddeb] h-fit">
          <h3 className="text-xl font-epilogue font-semibold text-color-black-100 pl-6 pt-7 pb-6 border-b border-b-[#d6ddeb]">
            Upcoming Interviews
          </h3>
          <div className="flex items-center justify-between px-6 py-[15.52px] border-b border-b-[#d6ddeb]">
            <span className="font-inter text-color-black-100 font-semibold">
              Today, <span className="font-normal">26 November</span>
            </span>
            <button className="flex gap-2 text-lg">
              <i className="ri-arrow-left-s-line text-color-black-50"></i>
              <i className="ri-arrow-right-s-line text-color-black-100"></i>
            </button>
          </div>
          <div className="flex flex-col gap-6 pl-6 pr-3 justify-center mt-6">
            <div className="flex items-center gap-4">
              <span className="font-inter text-color-black-50 font-medium text-sm w-[30%]">
                10:00 AM
              </span>
              {/* line */}
              <div className="h-[2px] bg-[#d6ddeb] w-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-inter text-color-black-50 font-medium text-sm ">
                10:30 AM
              </span>
              {/* img */}
              <div className="flex gap-2 items-center p-4 bg-color-blue-100 rounded-lg">
                <img
                  src={Avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full bg-color-blue-200"
                />
                <div className="flex flex-col">
                  <h4 className="font-inter font-semibold text-color-black-200">
                    Joe Bartmann
                  </h4>
                  <small className="font-inter font-medium text-color-black-50">
                    HR Manager at Divvy
                  </small>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-3">
              <span className="font-inter text-color-black-50 font-medium text-sm w-[30%]">
                11:00 AM
              </span>
              {/* line */}
              <div className="h-[2px] bg-[#d6ddeb] w-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

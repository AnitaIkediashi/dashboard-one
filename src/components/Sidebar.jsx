import React, { useState } from "react";
import { lists, settings } from "../data";
import logo from '../images/logo.png'
import pattern from '../images/Frame 1315.png'
import Avatar from '../images/imgOne.png'
import hamburgerMenu from '../images/menu.svg'

const Sidebar = () => {
  const [selected, setSelected] = useState(0)
  const [active, setActive] = useState(false)

  return (
    <>
      {/* desktop */}
      <div className="py-9 bg-color-blue-50 relative hidden lg:block">
        {/* logo */}
        <div className="w-full h-9 flex items-center justify-start xl:px-8 px-3 gap-2 mb-6">
          <img src={logo} alt="logo" />
          <h1 className="font-redHatDisplay -tracking-[0.01em] font-bold xl:text-2xl text-color-black-100 text-base">
            JobHuntly
          </h1>
        </div>
        {/* lists */}
        <ul className="flex flex-col gap-2 px-4 mb-9">
          {lists.map((list, index) => {
            return (
              <li
                key={index}
                className={`flex items-center gap-4 px-4 py-3 cursor-pointer text-color-black-50 font-medium hover:bg-color-blue-100 hover:text-color-blue-200 duration-300 ease-in ${
                  selected === index
                    ? "bg-color-blue-100 text-color-blue-200"
                    : ""
                }`}
                onClick={() => setSelected(index)}
              >
                <i className={list.icon}></i>
                <span className="hidden xl:flex">{list.title}</span>
              </li>
            );
          })}
        </ul>
        {/* line */}
        <div className="h-[1px] bg-[#ccccf5] w-full"></div>

        {/* settings */}
        <div className="mt-8 px-4 flex flex-col gap-6">
          <h3 className="px-4 text-color-black-50 font-semibold text-sm">
            SETTINGS
          </h3>
          <ul>
            {settings.map((item, i) => {
              return (
                <li
                  key={i}
                  className="flex items-center gap-4 px-4 py-3 cursor-pointer text-color-black-50 font-medium hover:bg-color-blue-100 hover:text-color-blue-200 duration-300 ease-in"
                >
                  <i className={item.icon}></i>
                  <span className="hidden xl:flex">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* pattern */}
        <div className="absolute bottom-0">
          <img src={pattern} alt="pattern" />
        </div>
        <div className="absolute bottom-10 z-10 flex flex-col xl:flex-row gap-2 items-center justify-center w-full">
          <img src={Avatar} alt="avatar" className="w-12 h-12 rounded-full" />
          <div>
            <h4 className="font-epilogue font-semibold text-lg text-color-black-100">
              Jake Gyll
            </h4>
            <small className="text-sm font-epilogue text-color-black-100">
              jakegyll@email.com
            </small>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div
        className="fixed top-8 md:top-10 left-6 lg:hidden w-10 h-10 rounded-full bg-white shadow-md  grid place-items-center  z-10 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <img src={hamburgerMenu} alt="" />
      </div>

      {/* sidebar */}
      <div className={`scroll ${active ? 'sidebar active' : 'sidebar'}`}>
        {/* logo */}
        <div
          className="w-full h-[84px] flex items-center justify-start px-4  gap-2 mb-6 "
          onClick={() => setActive(false)}
        >
          <img src={logo} alt="logo" />
          <h1 className="font-redHatDisplay -tracking-[0.01em] font-bold text-2xl text-color-black-100">
            JobHuntly
          </h1>
        </div>

        {/* lists */}
        <ul className="flex flex-col gap-2 mb-9">
          {lists.map((list, index) => {
            return (
              <li
                key={index}
                className={`flex items-center gap-4 px-8 py-3 cursor-pointer text-color-black-50 font-medium hover:bg-color-blue-100 hover:text-color-blue-200 duration-300 ease-in ${
                  selected === index
                    ? "bg-color-blue-100 text-color-blue-200"
                    : ""
                }`}
                onClick={() => {
                  setSelected(index);
                  setActive(!active);
                }}
              >
                <i className={list.icon}></i>
                <span>{list.title}</span>
              </li>
            );
          })}
        </ul>

        {/* line */}
        <div className="h-[1px] bg-[#ccccf5] w-full"></div>

        {/* settings */}
        <div className="mt-8 px-4 flex flex-col gap-6">
          <h3 className="px-4 text-color-black-50 font-semibold text-sm">
            SETTINGS
          </h3>
          <ul>
            {settings.map((item, i) => {
              return (
                <li
                  key={i}
                  className="flex items-center gap-4 px-8 py-3 cursor-pointer text-color-black-50 font-medium hover:bg-color-blue-100 hover:text-color-blue-200 duration-300 ease-in"
                >
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-2 items-center px-8 mt-4 w-full pb-4">
          <img src={Avatar} alt="avatar" className="w-12 h-12 rounded-full" />
          <div>
            <h4 className="font-epilogue font-semibold text-lg text-color-black-100">
              Jake Gyll
            </h4>
            <small className="text-sm font-epilogue text-color-black-100 ">
              jakegyll@email.com
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

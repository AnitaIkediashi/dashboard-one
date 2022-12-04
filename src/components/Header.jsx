import React from "react";
import bell from '../images/Notification.svg'
import Home from '../images/home-btn.svg'

const Header = () => {
  return (
    <header className="h-fit w-full bg-white flex items-center p-8 shadow-[inset_0px_-1px_#d6dde8]">
      <nav className="w-full h-full flex items-center justify-between">
        <h1 className="font-clashDisplay font-semibold sm:text-[2rem] text-xl text-color-black-200 pl-6 lg:pl-0">
          Dashboard
        </h1>
        <div className="flex items-center gap-4 sm:gap-8">
          <button className="py-3 px-6 border border-[#ccccf5] font-epilogue font-bold text-color-blue-200 hidden md:block">
            Back to homepage
          </button>
          <img src={Home} alt="home button" className="md:hidden block" />
          <img src={bell} alt="bell notification" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

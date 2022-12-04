import React from "react";

const UserProfile = () => {
  return (
    <section className="flex lg:items-center items-start flex-wrap h-fit justify-between px-8 gap-2 lg:gap-0">
      <div>
        <h2 className="text-2xl text-color-black-200 font-clashDisplay font-semibold h2-text">
          Good morning, Jake
        </h2>
        <p className="font-epilogue text-color-black-50 font-medium">
          Here is what's happening with your job search applications from July
          19 - July 25.
        </p>
      </div>
      <div className="flex items-center gap-4 py-3 px-6 border border-color-blue-200">
        <p className="font-epilogue font-normal text-color-black-200">Jul 19 - Jul 25</p>
        <span className="text-color-blue-200">
          <i className="ri-calendar-event-line"></i>
        </span>
      </div>
    </section>
  );
};

export default UserProfile;

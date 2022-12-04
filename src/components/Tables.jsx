import React from "react";

const Tables = ({item}) => {
  return (
    <>
      {/* desktop */}
      <div
        className="hidden lg:flex justify-between items-center p-5 overflow-y-hidden gap-5 lg:gap-0 "
        style={{ backgroundColor: item.bg }}
      >
        {/* col1 */}
        <div className="flex gap-4 items-center">
          <img src={item.logo} alt="company logo" />
          <div className="flex flex-col">
            <h4 className="font-epilogue font-bold text-lg text-color-black-200">
              {item.title}
            </h4>
            <p className="font-epilogue text-color-black-50">{item.desc}</p>
          </div>
        </div>

        {/* col2 */}
        <div className="flex flex-col items-center">
          <h4 className="font-epilogue font-medium text-color-black-200">
            {item.dateTitle}
          </h4>
          <p className="font-epilogue text-color-black-50">{item.date}</p>
        </div>

        {/* col3 */}
        <div className="flex flex-col items-center">
          <button
            style={{
              color: item.backGround,
              border: `1px solid ${item.backGround}`,
            }}
            className="px-[10px] py-[6px] rounded-[80px] font-semibold"
          >
            {item.stats}
          </button>
        </div>

        {/* col4 */}
        <div className="flex flex-col items-end">
          <i className={item.icon}></i>
        </div>
      </div>

      {/* mobile */}
      <div
        className="flex flex-col lg:hidden p-4 h-fit relative gap-3 "
        style={{ backgroundColor: item.bg }}
      >
        <img src={item.logo} alt="company logo" className="h-9 w-9" />
        <div className="flex flex-col">
          <h4 className="font-epilogue font-bold text-lg text-color-black-200">
            {item.title}
          </h4>
          <p className="font-epilogue text-color-black-50">{item.desc}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h4 className="font-epilogue text-color-black-50">
              {item.dateTitle}
            </h4>
            <p className="font-epilogue text-color-black-200 font-medium">
              {item.date}
            </p>
          </div>
          <button
            style={{
              color: item.backGround,
              border: `1px solid ${item.backGround}`,
            }}
            className="px-[10px] py-[6px] rounded-[80px] font-semibold"
          >
            {item.stats}
          </button>
        </div>
      </div>
    </>
  );
};

export default Tables;

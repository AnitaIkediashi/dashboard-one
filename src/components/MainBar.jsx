import React from "react";
import Header from './Header'
import Stats from "./Stats";
import Table from "./Table";
import UserProfile from "./UserProfile";

const MainBar = () => {
  return (
    <div className="grid grid-cols-1 gap-8 ">
      <Header />
      <UserProfile />
      <Stats />
      <Table />
    </div>
  );
};

export default MainBar;

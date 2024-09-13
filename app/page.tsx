"use client";

import { useCallback, useState } from "react";

import SideBar from "./components/Sidebar";
import AllProjects from "./Pages/AllProjects/Allproject";
import AllTasksContainer from "./Pages/AllTasks/AllTask";

import { useContextApp } from "./contextApp";

export default function Home() {
  const { openSideBarObject: { openSideBar } } = useContextApp();

  return (
    <div className="flex w-full h-screen poppins">
      {/* Soft Layer */}
      {openSideBar && (
        <div className="w-full h-full z-50 bg-slate-800 fixed opacity-30"></div>
      )}

      {/* Sidebar */}
      <SideBar />

      <AllProjects />
      {/* <AllTasksContainer /> */}
    </div>
  );
}
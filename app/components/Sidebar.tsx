import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SplitscreenIcon from "@mui/icons-material/Splitscreen";
import LogoutIcon from "@mui/icons-material/Logout";

function SideBar() {
  return (
    <div
      className="w-[97px] h-screen py-8 bg-white flex flex-col items-center justify-between border-r
      max-sm:hidden">
    <Logo/>
    <Menu/>
    <Profile/>
    
    
    </div>    
  );
}

//profile
function Profile()
{
    return <div className="w-7 h-7 bg-orange-600 rounded-md"></div>;
}

// Menu
function Menu() {
    return (
      <div className="flex flex-col gap-6 items-center">
        <BorderAllIcon
          sx={{ fontSize: "27px" }}
          className="text-orange-600 cursor-pointer"
        />
        <SplitscreenIcon
          sx={{ fontSize: "25px" }}
          className="text-slate-300 cursor-pointer"
        />
        <LogoutIcon
          sx={{ fontSize: "25px" }}
          className="text-slate-300 cursor-pointer"
        />
      </div>
    );
  }
  
// Logo
function Logo() {
    return (
      <div className="rounded-md w-10 h-10 flex items-center justify-center">
        <TaskAltIcon
          className="text-orange-600 font-bold"
          sx={{ fontSize: "41px" }}
        />
      </div>
    );
  }
  
export default SideBar;
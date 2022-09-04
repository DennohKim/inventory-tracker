import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BiLandscape } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { TbBuildingStore } from "react-icons/tb";

import { useStateContext } from "../context/ContextProvider";

const Dashboard = () => {
  const { activeMenu, land, residential, commercial } = useStateContext();

  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed" style={{ zIndex: "100000" }}>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
        </div>

        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
            <h1 className="px-12 mx-auto font-bold ">Comparables</h1>

            <div className="px-12 mx-auto my-4 grid grid-cols-3 gap-8">
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-[#E62953] hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Land</p>
                  <p className="font-bold text-4xl ">{land.length}</p>
                </div>
                <div className="w-2/6" >
                  <BiLandscape className="w-full fill-slate-600 hover:fill-white group-hover:stroke-white" size={40}/>
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-[#E62953] hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Residential</p>
                  <p className="font-bold text-4xl">{residential.length}</p>
                </div>
                <div className="w-2/6">
                  <BiHome className="w-full fill-slate-600 hover:fill-white" size={40} />
                </div>
              </div>
              <div className="px-4 py-2 bg-slate-200 rounded flex justify-between hover:bg-[#E62953] hover:text-white">
                <div>
                  <p className="pb-3 text-gray-600">Commercial</p>
                  <p className="font-bold text-4xl">{commercial.length}</p>
                </div>
                <div  className="w-2/6" >
                  <TbBuildingStore className="w-full outline-slate-200 " size={40}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { BiPrinter } from "react-icons/bi";
import { BsDistributeVertical } from "react-icons/bs";
import { MdComputer, MdOutlineBusinessCenter } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

import { useStateContext } from "../context/ContextProvider";

const Dashboard = () => {
  const { activeMenu, clients, enterprises, printers, computers, manufacturers } = useStateContext();

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
            {/* <h1 className="px-12 mx-auto font-bold "></h1> */}

            <div className="px-12 mx-auto my-4 grid grid-cols-3 gap-8">
              <div className="px-4 py-2 bg-[#FDBFFF]/[0.3] rounded flex justify-between hover:bg-[#130026] hover:text-[#F05AF6]">
                <div>
                  <p className="pb-3 text-gray-600 hover:text-[#F05AF6]">Clients</p>
                  <p className="font-bold text-4xl ">{clients.length}</p>
                </div>
                <div className="w-2/6" >
                  <HiOutlineUserGroup className="w-full hover:fill-[#F05AF6] group-hover:stroke-white" size={40}/>
                </div>
              </div>
              <div className="px-4 py-2 bg-[#FDBFFF]/[0.3] rounded flex justify-between hover:bg-[#130026] hover:text-[#F05AF6]">
                <div>
                  <p className="pb-3 text-gray-600 hover:text-[#F05AF6]">Enterprises</p>
                  <p className="font-bold text-4xl">{enterprises.length}</p>
                </div>
                <div className="w-2/6">
                  <MdOutlineBusinessCenter className="w-full outline-slate-600 hover:fill-[#F05AF6]" size={40} />
                </div>
              </div>
              <div className="px-4 py-2 bg-[#FDBFFF]/[0.3] rounded flex justify-between hover:bg-[#130026] hover:text-[#F05AF6]">
                <div>
                  <p className="pb-3 text-gray-600 hover:text-[#F05AF6]">Printers</p>
                  <p className="font-bold text-4xl">{printers.length}</p>
                </div>
                <div  className="w-2/6" >
                  <BiPrinter className="w-full outline-slate-200 hover:fill-[#F05AF6]" size={40}/>
                </div>
              </div>
              <div className="px-4 py-2 bg-[#FDBFFF]/[0.3] rounded flex justify-between hover:bg-[#130026] hover:text-[#F05AF6]">
                <div>
                  <p className="pb-3 text-gray-600 hover:text-[#F05AF6]">Computers</p>
                  <p className="font-bold text-4xl">{computers.length}</p>
                </div>
                <div className="w-2/6">
                  <MdComputer className="w-full outline-slate-600 hover:fill-[#F05AF6]" size={40} />
                </div>
              </div>
              <div className="px-4 py-2 bg-[#FDBFFF]/[0.3] rounded flex justify-between hover:bg-[#130026] hover:text-[#F05AF6]">
                <div>
                  <p className="pb-3 text-gray-600 hover:text-[#F05AF6]">Manufacturers</p>
                  <p className="font-bold text-4xl">{manufacturers.length}</p>
                </div>
                <div className="w-2/6">
                  <BsDistributeVertical className="w-full outline-slate-600 hover:fill-[#F05AF6]" size={40} />
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
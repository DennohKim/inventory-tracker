import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { FcBiotech } from "react-icons/fc";
import { links } from "../data/links";
import logo from "../assets/images/logosupplylync.png"
import { useStateContext } from "../context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

 
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#130026] bg-[#F05AF6] text-md m-2';
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-[#F05AF6] dark:text-white dark:hover:text-[#130026] hover:bg-[#FDBFFF]/[0.6] hover:text-[#130026]  m-2"

  return (
    <div className="bg-[#130026] h-screen md:overflow-hidden md:hover:overflow-auto pb-10 pt-3 pl-5">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-600"
            >
              <img src={logo} alt="valfo" width={200} height={200} />
            </Link>
          </div>
          <div className="mt-10">
            {links.map((mainLink) => (
              <div key={mainLink.title}>
                <p className="text-[#FDBFFF] m-3 mt-4 uppercase">{mainLink.title}</p>
                {mainLink.links.map((navLink) => (
                <NavLink to={`/${navLink.name}`} key={navLink.name} onClick={handleCloseSideBar} className={({isActive}) => isActive ? activeLink : normalLink }>
                  {navLink.icon}
                  <span className="capitalize">{navLink.name}</span>
                </NavLink>
              ))}
              </div>
            
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
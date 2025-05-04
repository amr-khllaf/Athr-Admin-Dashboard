import React from "react";
import { Link, NavLink } from "react-router-dom";
import { GiReceiveMoney } from "react-icons/gi";
import { SiMoneygram } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import { MdOutlineCancel, MdOutlineDashboard } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../../Data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();
  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // //! We use it as a hook to get the context value
  // const activeMenu = true;
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2  text-gray-700 dark:text-white dark:hover:text-black hover:bg-[#f7f7f7]";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-[#f7f7f7] m-2";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {
                handleCloseSidebar();
                // setActiveMenu(false); //! Close the menu when clicking on the logo
              }}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <RiAdminFill className="mt-1" /> <span>Athr Dashboard</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button "
                onClick={() => {
                  setActiveMenu((setActiveMenu) => !setActiveMenu); //! Toggle the menu state , prev is the previous state
                }}
                className="text-xl rounded-full p-3 mt-4 block  hover:cursor-pointer hover:bg-[#f7f7f7] md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={() => {
                      handleCloseSidebar(); //! Close the menu when clicking on a link
                    }}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "transparent",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
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

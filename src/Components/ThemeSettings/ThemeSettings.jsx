import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { themeColors } from "../../Data/dummy";
import { useStateContext } from "../../Contexts/ContextProvider.jsx";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext(); //! We use it as a "hook" to get the context value
  return (
    <div className="bg-[rgba(0,0,0,0.3)] w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-[300px]">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-bold text-xl text-black">Settings</p>
          <button
            type="button"
            onClick={() => {
              setThemeSettings(false);
            }}
            style={{
              color: "rgb(153, 171, 180)",
              borderRadius: "50%",
            }}
            className="text-xl p-3 hover:drop-shadow-xl hover:bg-[#f7f7f7] hover:cursor-pointer"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 ">
          <p className="font-bold text-lg text-black">Theme Options</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="cursor-pointer"
              onChange={() => {
                setMode("Light");
              }}
              checked={currentMode === "Light"}
            />
            <label
              htmlFor="light"
              className="ml-2 text-md text-gray-800 cursor-pointer "
            >
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              className="cursor-pointer"
              onChange={() => {
                setMode("Dark");
              }}
              checked={currentMode === "Dark"}
            />
            <label
              htmlFor="dark"
              className="ml-2 text-md text-gray-800 cursor-pointer "
            >
              Dark
            </label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 ">
          <p className="font-bold text-lg text-black">Theme Colors</p>
          <div className="flex gap-3 ">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    className="w-8 h-8 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => {
                      setColor(item.color);
                    }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;

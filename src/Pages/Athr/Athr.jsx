import React from "react";
import {
  FaPoundSign,
  FaDollarSign,
  FaEuroSign,
  FaYenSign,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import welcomeBg from "../../Data/welcome-bg.svg";
import Button from "./../../Components/Button/Button";
import { donationsData, SparklineAreaData } from "../../Data/dummy";
import { SparkLine, Stacked } from "../../Components";
import { useStateContext } from "../../Contexts/ContextProvider.jsx";
import { Footer } from "../../Components";

// Helper: Get currency icon
const getCurrencyIcon = (currency) => {
  switch (currency) {
    case "GBP":
      return <FaPoundSign className="mt-1" />;
    case "USD":
      return <FaDollarSign className="mt-1" />;
    case "EUR":
      return <FaEuroSign className="mt-1" />;
    case "JPY":
      return <FaYenSign className="mt-1" />;
    case "EGP":
      return <span className="mt-1">E£</span>;
    default:
      return <FaMoneyBillAlt className="mt-1" />;
  }
};

// Helper: Format currency based on browser locale (Arabic/English)
const formatCurrency = (value, currency = "EGP") => {
  const browserLocale = navigator.language || "en-US";
  let formattedValue;
  if (browserLocale.startsWith("ar")) {
    formattedValue = new Intl.NumberFormat("ar-EG", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(value);
  } else {
    formattedValue = new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(value);
  }
  return formattedValue;
};

// Helper: Determine percentage color for badges
const getPercentageColor = (percentage) => {
  const value = parseFloat(percentage);
  return value >= 0 ? "bg-green-500" : "bg-red-500";
};

// Helper: Determine section background color based on percentage
const getSectionBackgroundColor = (percentage) => {
  const value = parseFloat(percentage);
  return value >= 0
    ? "bg-green-100 dark:bg-green-900"
    : "bg-red-100 dark:bg-red-900";
};

const Athr = () => {
  const { currentColor } = useStateContext(); // Assuming you have a context provider for currentColor
  const amount = 99900998;
  const currency = "EGP";
  const budgetPercentage = 23; // Positive, should be green
  const expensePercentage = -12; // Negative, should be red

  return (
    <div className="mt-20">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          className="bg-white dark:text-gray-200 dark:bg-[#33373e] h-50 rounded-xl w-[90%] p-8 pt-9 m-3"
          style={{
            backgroundImage: `url(${welcomeBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Donations</p>
              <p className="text-2xl text-gray-700 font-bold flex items-center">
                {formatCurrency(amount, currency)}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
      </div>
      <div className="flex m-3 flex-wrap justify-center gap-2.5 items-center">
        {donationsData.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:text-gray-200 dark:bg-[#33373e] md:w-56 p-4 pt-9 rounded-2xl flex flex-col justify-center items-center m-3 cursor-pointer hover:drop-shadow-xl"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.amount}</span>
              <span className={`text-sm text-${item.pcColor} ml-2`}>
                {item.percentage}
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-[#1e3a8a] m-3 p-4 rounded-2xl md:w-[75%]">
          <div className="flex justify-between">
            <p className="font-bold text-gray-700 text-xl">Revenue Updates</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl cursor-pointer">
                <span>
                  <GoDotFill className="text-gray-700 font-bold" />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-[#00bdae] hover:drop-shadow-xl cursor-pointer">
                <span>
                  <GoDotFill className="text-green-700 font-bold" />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="w-full md:w-full lg:w-3/4 bg-white dark:bg-[#1e3a8a] rounded-2xl p-6 m-4 shadow-md dark:shadow-blue-900">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Budget Section */}
                <div
                  className={`flex flex-col items-center cursor-pointer lg:items-start ${getSectionBackgroundColor(
                    budgetPercentage
                  )} rounded-lg p-4 border-r-0 lg:border-r-1 border-[rgba(0,0,0,0.1)] pr-0 lg:pr-8 hover:bg-gray-50 dark:hover:bg-blue-900 hover:shadow-lg transition-all duration-200`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
                    <span className="text-2xl font-bold text-black dark:text-gray-100 flex items-center">
                      {formatCurrency(40000, currency)}
                    </span>
                    <span
                      className={`p-1.5 hover:drop-shadow-2xl cursor-pointer rounded-full text-white ${getPercentageColor(
                        budgetPercentage
                      )} text-xs`}
                    >
                      {budgetPercentage}%
                    </span>
                  </div>
                  <p className="text-blue-900 dark:text-blue-200 mt-1 text-center lg:text-left">
                    Budget
                  </p>
                </div>
                {/* Expense Section */}
                <div
                  className={`flex flex-col items-center cursor-pointer lg:items-start ${getSectionBackgroundColor(
                    expensePercentage
                  )} rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-blue-900 hover:shadow-lg transition-all duration-200`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2">
                    <span className="text-2xl font-bold text-black dark:text-gray-100 flex items-center">
                      {formatCurrency(19000, currency)}
                    </span>
                    <span
                      className={`p-1.5 hover:drop-shadow-2xl cursor-pointer rounded-full text-white ${getPercentageColor(
                        expensePercentage
                      )} text-xs`}
                    >
                      {Math.abs(expensePercentage)}%
                    </span>
                  </div>
                  <p className="text-blue-900 dark:text-blue-200 mt-1 text-center lg:text-left">
                    Expense
                  </p>
                </div>
              </div>
              {/* Stacked Chart Section */}
              <div className="mt-6 flex justify-center">
                <div className="w-full max-w-[480px] lg:max-w-[600px] px-4 md:px-6 lg:px-8">
                  <Stacked width="100%" height="400px" />
                </div>
              </div>
              {/* SparkLine Section */}
              <div className="mt-12 flex justify-center">
                <div className="w-full max-w-[300px] lg:max-w-[400px]">
                  <SparkLine
                    currentColor={currentColor}
                    id="line-sparkline"
                    type="Line"
                    height="80px"
                    width="100%"
                    data={SparklineAreaData}
                    color={currentColor}
                  />
                </div>
              </div>
              {/* Button Section */}
              <div className="mt-6 flex justify-center">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Athr;

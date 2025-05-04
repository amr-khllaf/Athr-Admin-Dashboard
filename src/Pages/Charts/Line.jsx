import React from "react";
import { Header, ChartsHeader, LineChart } from "../../Components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Header category="Charts" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;

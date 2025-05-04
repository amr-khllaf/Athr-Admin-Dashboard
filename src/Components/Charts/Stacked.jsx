import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Tooltip,
  StackingColumnSeries,
  Category,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../Data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <div className="bg-white dark:bg-[#1e3a8a] rounded-lg p-4 shadow-md dark:shadow-blue-900 hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
      <ChartComponent
        width={width}
        height={height}
        id="Stacked-chart"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        legendSettings={{
          background: "white",
          padding: 10,
          shapeHeight: 8,
          shapeWidth: 8,
        }}
        chartArea={{
          border: { width: 0 },
          background: "linear-gradient(to bottom, #f9fafb, #ffffff)",
          opacity: 0.1,
        }}
        tooltip={{
          enable: true,
          fill: "#3b82f6", // Updated from #1f2937 to modern blue
          textStyle: { color: "#ffffff" },
          border: { width: 1, color: "#e5e7eb" },
        }}
        background="transparent"
      >
        <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective
              key={index}
              {...item}
              animation={{ enable: true, duration: 800 }}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Stacked;

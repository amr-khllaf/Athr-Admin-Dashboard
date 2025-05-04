import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  // Validate data to ensure it is an array with valid x and yval properties
  if (
    !data ||
    !Array.isArray(data) ||
    !data.every(
      (item) => typeof item.x !== "undefined" && typeof item.yval === "number"
    )
  ) {
    console.error("Invalid sparkline data format");
    return <div>Invalid sparkline data</div>;
  }

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval" // Updated to match SparklineAreaData property
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}", // Updated to match yName
        trackLineSettings: { visible: true },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;

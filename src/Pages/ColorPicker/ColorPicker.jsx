import React, { useState } from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import { Header } from "../../Components";

const ColorPicker = () => {
  // State to hold the RGB value
  const [rgbValue, setRgbValue] = useState("rgb(0, 0, 0)");

  // Update the change function to set the RGB value
  const change = (args) => {
    console.log("Color changed:", args.currentValue); // Debug to check event data
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;

    // Use rgba and convert to rgb format if needed
    const rgba = args.currentValue.rgba;
    // Convert rgba (e.g., rgba(225,190,231,1)) to rgb (e.g., rgb(225, 190, 231))
    const rgb = rgba.replace(
      /rgba\((\d+),(\d+),(\d+),[\d.]+\)/,
      "rgb($1, $2, $3)"
    );
    setRgbValue(rgb); // Update RGB value
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-bold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
            {/* Display the RGB value below the Inline Palette */}
            <p className="text-lg mt-4 font-bold">RGB: {rgbValue}</p>
          </div>
          <div>
            <p className="text-2xl font-bold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

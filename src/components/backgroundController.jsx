import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./colorPickerController";
import { UpdateStorageContext } from "../context/updateContext";

const backgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(storageValue?storageValue?.bgRounded:0);
  const [padding, setPadding] = useState(storageValue?storageValue?.bgPaddig:0);
  const [color, setColor] = useState(storageValue?storageValue?.bgColor:"#fff");
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [padding, rounded, color]);

  return (
    <>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center bg-white">
          Rounded <span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center bg-white">
          Padding <span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center bg-white">
          Icon color
        </label>
        <div className="ml-24 mt-5">
          <ColorPickerController selectedColor={(color) => setColor(color)} />
        </div>
      </div>
    </>
  );
};

export default backgroundController;

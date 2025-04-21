import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPicker from "./colorPickerController";
import { UpdateStorageContext } from "../context/updateContext";
import IconList from "./IconList";
const iconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, icon]);
  console.log("this is icon ", icon);

  return (
    <div>
      <IconList selectedIcon={(icon) => setIcon(icon)} />
      <div className="py-2">
        <label className="p-2 flex justify-between items-center bg-white">
          Size <span>{size} px</span>
        </label>
        <Slider
          defaultValue={[size]}
          max={512}
          step={1}
          onValueChange={(event) => setSize(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center bg-white">
          Rotate <span>{rotate} °</span>
        </label>
        <Slider
          defaultValue={[rotate]}
          max={360}
          step={1}
          onValueChange={(event) => setRotate(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center bg-white">
          Icon color
        </label>
        <div className="ml-24 mt-5">
          <ColorPicker selectedColor={(color) => setColor(color)} />
        </div>
      </div>
    </div>
  );
};

export default iconController;

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog.jsx";
import { icons } from "lucide-react";
import { iconsList } from "../constants/icons.js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx";
import axios from "axios";

const BASE_URL = "http://logoexpress.tubeguruji.com";
const IconList = ({ selectedIcon }) => {
  const [dialog, setDialog] = useState(false);
  const [pngIconList, setPngIconList] = useState();
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  useEffect(() => {
    getPngIcons();
  }, []);
  const Icon = ({ color, size, name }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) return null;
    return <LucideIcon color={color} size={size} />;
  };

  const getPngIcons = () => {
    axios.get(BASE_URL + "/getIcons.php").then((resp) => {
      console.log("this data ", resp.data);
      setPngIconList(resp.data);
    });
  };

  return (
    <div>
      <div>
        <label className="bg-white p-5 rounded-r-4xl">Icon</label>
        <div
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center mt-10"
          onClick={() => setDialog(true)}
        >
          <Icon name={icon} color={"#000"} size={20} />
        </div>
      </div>

      <Dialog open={dialog} onOpenChange={setDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick your favorite icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icon</TabsTrigger>
                  <TabsTrigger value="color-icon">Color icon</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconsList.map((iconName, index) => (
                      <div
                        key={index}
                        className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        onClick={() => {
                          setIcon(iconName);
                          selectedIcon(iconName);
                          setDialog(false);
                        }}
                      >
                        <Icon name={iconName} color={"#000"} size={20} />
                      </div>
                    ))}
                  </div>{" "}
                </TabsContent>
                <TabsContent value="color-icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                  {pngIconList?.map((iconName, index) => (
  <div
    key={index}
    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
    onClick={() => {
      setIcon(iconName);
      selectedIcon(iconName);
      setDialog(false);
    }}
  >
    <img
      src={BASE_URL + "/png/" + iconName}
      alt={iconName}
      className="w-8 h-8 object-contain"
    />
  </div>
))}

                  </div>{" "}
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;

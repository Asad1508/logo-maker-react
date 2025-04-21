import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import IconController from "./components/iconController";
import BackgroundController from "./components/backgroundController";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./context/updateContext";

function App() {
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState();
  const [downloadIcon, setDownloadIcon] = useState()
  return (
    <>
      <UpdateStorageContext.Provider
        value={{ updateStorage, setUpdateStorage }}
      >
        <Header DownloadIcon={setDownloadIcon} />
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>

        <div className="ml-64 grid grid-cols-2 h-screen">
          <div className="bg-amber-100 overflow-auto">
            {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className="bg-orange-200 round">
            <span>
              <LogoPreview downloadIcon={downloadIcon}/>
            </span>
          </div>
        </div>
      </UpdateStorageContext.Provider>
    </>
  );
}

export default App;

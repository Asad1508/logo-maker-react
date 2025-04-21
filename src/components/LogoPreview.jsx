import React, { useContext, useEffect, useState } from 'react'
import { UpdateStorageContext } from '../context/updateContext';
import { DownloadIcon, icons } from 'lucide-react';
import html2canvas from 'html2canvas';
import { toPng } from 'html-to-image';

const LogoPreview = ({downloadIcon}) => {
    const [storageValue, setStorageValue] = useState();
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

    

    useEffect(() => {
      const storgeData = JSON.parse(localStorage.getItem('value'));
      console.log("this is test main ", storgeData);
      
      setStorageValue(storgeData);
    }, [updateStorage]);    

    useEffect(()=>{
     if(downloadIcon){
        console.log("click");
        
        downloadPngLogo()
     }
    }, [downloadIcon])

    const downloadPngLogo = () => {
        const downloadlogoDiv = document.getElementById("downloadlogoDiv");
        toPng(downloadlogoDiv)
          .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = 'asadLogo.png';
            link.href = dataUrl;
            link.click();
          })
          .catch((error) => {
            console.error('error generating image', error);
          });
      };

    const Icon = ({ color, size, name, rotate }) => {
        const LucidIcon = icons[name];
      
        if (!LucidIcon) return null;
      
        return <LucidIcon color={color} size={size} 
        style={{transform: `rotate(${rotate}deg)`}}
        />;
      };
      
  
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300' style={{padding: storageValue?.bgPadding}}>
          <div
            id="downloadlogoDiv"
            className='h-full w-full flex items-center justify-center'
            style={{
              borderRadius: storageValue?.bgRounded,
              background: storageValue?.bgColor,
            }}

          >
            <Icon name={storageValue?.icon} color={storageValue?.iconColor} size={storageValue?.iconSize} rotate={storageValue?.iconRotate}/>
          </div>
        </div>
      </div>
    );
}

export default LogoPreview
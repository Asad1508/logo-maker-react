import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { cn } from '../lib/utils';

const Header = ({DownloadIcon}) => {
  return (
    <div className='p-4 shadow-sm border flex items-center justify-between'>
      <img src="/vite.svg" alt="Vite Logo" />
      <Button
        variant='default' 
        style={{ backgroundColor: '#F59E0B' }}
        className={cn('text-lg flex items-center space-x-2 bg-amber-600 hover:bg-amber-500 text-white')}
        >
        <Download />
        <span onClick={()=> DownloadIcon(Date.now())}>Download</span>
      </Button> 
      </div>
  );
};

export default Header;

import React, { useState } from 'react';
import indFlag from "../Assets/flagind.png";
import graduateimg from "../Assets/icons8-graduate-48.png";
import mailimg from "../Assets/icons8-mail-50.png";
import dropdown from "../Assets/icons8-expand-arrow-50 (1).png";
import Unknown from '../Assets/unknown.jpg'

const SideInfo = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='w-[350px] h-full bg-slate-50 ml-10 mt-10 rounded-xl relative'>
      <div className='flex'>
        <img src={Unknown} alt="" className='h-20 w-20 rounded-full bg-slate-400 ml-4 mt-4 '/>
        <div className='pl-4 pt-3 mt-4'>
          <div className=' text-xl font-bold'>Siddharth Singh</div>
          <div className='text-sm font-semibold mt-2'>Last Updated 18 May 2024</div>
        </div>
      </div>
      
      <div>
        <div className='flex items-center'>
          <img src={indFlag} alt="" className='h-[20px] ml-4 mt-1' />
          <div className='p-2 pt-[14px]'>India</div>
        </div>

        <div className='flex items-center'>
          <img src={graduateimg} alt="" className='h-6 ml-4 mt-1 w-[27px]' />
          <div className='p-2 pt-[14px]'>Delhi Technological University</div>
        </div>

        <div className='flex items-center'>
          <img src={mailimg} alt="" className='h-6 ml-5 mt-1 w-[25px]' />
          <div className='p-2'>sample@gamil.com</div>
        </div>
      </div>

      <div className='h-[2px] w-[300px] rounded-full ml-5 mt-2 bg-slate-200'></div>

      <div className='ml-6 mt-4 h-10 w-[280px] bg-slate-200 rounded-lg pl-4 pt-1 text-xl text-slate-500 font-semibold'>Overall Status</div>

      <div className='h-[2px] w-[300px] rounded-full ml-5 mt-2 bg-slate-200'></div>

      <div>
        <div className='flex'>
          <div className='ml-12 mt-2 text-2xl text-slate-600 font-semibold '>Chapter wise Stats</div>
          <img 
            src={dropdown} 
            alt="" 
            className={`w-4 mt-3 ml-4 cursor-pointer transition-transform duration-300 ${isDropdownOpen ? '' : '-rotate-90'} `} 
            onClick={handleDropdown}
          />
        </div>
        
        {isDropdownOpen && (
            <div className='flex '>
             <div className='h-30 ml-16 w-1 bg-slate-300'></div>
            <div className='ml-6 mt-2'>
            <div className='mt-2 text-xl text-slate-500'>Chapter 1</div>
            <div className='mt-1 text-xl text-slate-500'>Chapter 2</div>
            <div className='mt-1 text-xl text-slate-500'>Chapter 3</div>
          </div>
          </div>
        
        )}
      </div>
    </div>
  );
}

export default SideInfo;

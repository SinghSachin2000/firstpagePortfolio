
import React from 'react';
import HeatMap2 from './HeatMap2';

const TopDatesQues = () => {
 

  return (
    <div className='upperSec  flex  mb-4  flex-col sm:flex-row  '>
      <div className='flex flex-col justify-evenly text-center h-[200px] sm:h-[160px] w-[350px] sm:w-[240px]   bg-white ml-10 mt-10 rounded-2xl'>
        <div className='font-bold text-2xl pt-2   text-slate-600'>Total Questions</div>
        <div className='font-bold text-8xl -mt-8 pt-4'>105</div>
      </div>

      <div className='flex flex-col sm:flex-row justify-evenly h-[400px] sm:h-[160px] rounded-3xl w-[350px] sm:w-[800px] ml-10 sm:ml-6 p-3 mt-10 bg-white  mb-4  '>
        <div>
          <div className='flex ml-10  mb-4  flex-col sm:flex-row  '>
            <div className='flex'>
              <div className='pr-1 font-bold'>67 </div>
              <div className='font-semibold text-slate-500'>Submission in past 6 months</div>
            </div>

            <div className='flex ml-20'>
              <div className='pr-1 text-slate-500 font-semibold'>Total Active Days:</div>
              <div className='font-bold'>35</div>
            </div>
          </div>
          <div><HeatMap2 /></div>
        </div>

        <div className='text-center'>
          <div className='flex'>
            <div className='text-slate-500 font-semibold'>Current Streak:</div>
            <div className='font-bold pl-1'>3</div>
          </div>
          <div className='font-bold text-[80px] -mt-6'>55</div>
          <div className='-mt-4 font-semibold text-slate-600'>Max. Streak</div>
        </div>
      </div>
    </div>
  );
};

export default TopDatesQues;


import React, { useState, useEffect } from 'react';
import HeatmapCalender from './HeatmapCalender';

const TopDatesQues = () => {
  const [userActivity, setUserActivity] = useState([
    { "Date": "10-04-2024", "Number of Question": 1 },
    { "Date": "11-04-2024", "Number of Question": 2 },
    { "Date": "12-04-2024", "Number of Question": 0 },
    { "Date": "13-04-2024", "Number of Question": 3 },
    { "Date": "14-04-2024", "Number of Question": 4 },
    { "Date": "15-04-2024", "Number of Question": 3 },
    { "Date": "16-04-2024", "Number of Question": 4 },
    { "Date": "17-04-2024", "Number of Question": 5 },
    { "Date": "18-04-2024", "Number of Question": 5 },
    { "Date": "19-04-2024", "Number of Question": 2 },
    { "Date": "20-04-2024", "Number of Question": 4 },
    { "Date": "21-04-2024", "Number of Question": 1 },
    { "Date": "22-04-2024", "Number of Question": 4 },
    { "Date": "23-04-2024", "Number of Question": 3 },
    { "Date": "24-04-2024", "Number of Question": 4 },
    { "Date": "25-04-2024", "Number of Question": 1 },
    { "Date": "26-04-2024", "Number of Question": 2 },
    { "Date": "27-04-2024", "Number of Question": 0 },
    { "Date": "28-04-2024", "Number of Question": 0 },
    { "Date": "29-04-2024", "Number of Question": 1 },
    { "Date": "30-04-2024", "Number of Question": 4 },
    { "Date": "01-05-2024", "Number of Question": 3 },
    { "Date": "02-05-2024", "Number of Question": 5 },
    { "Date": "03-05-2024", "Number of Question": 5 },
    { "Date": "04-05-2024", "Number of Question": 4 },
    { "Date": "05-05-2024", "Number of Question": 3 },
    { "Date": "06-05-2024", "Number of Question": 4 },
    { "Date": "07-05-2024", "Number of Question": 4 },
    { "Date": "08-05-2024", "Number of Question": 4 },
    { "Date": "09-05-2024", "Number of Question": 4 },
    { "Date": "10-05-2024", "Number of Question": 4 },
    { "Date": "11-05-2024", "Number of Question": 5 },
    { "Date": "12-05-2024", "Number of Question": 3 },
    { "Date": "13-05-2024", "Number of Question": 1 },
    { "Date": "14-05-2024", "Number of Question": 0 },
    { "Date": "15-05-2024", "Number of Question": 0 },
    { "Date": "16-05-2024", "Number of Question": 0 },
    { "Date": "17-05-2024", "Number of Question": 5 },
    { "Date": "18-05-2024", "Number of Question": 3 },
    { "Date": "19-05-2024", "Number of Question": 2 },
    { "Date": "20-05-2024", "Number of Question": 4 },
    { "Date": "21-05-2024", "Number of Question": 4 },
    { "Date": "22-05-2024", "Number of Question": 4 },
    { "Date": "23-05-2024", "Number of Question": 0 },
    { "Date": "24-05-2024", "Number of Question": 4 },
    { "Date": "25-05-2024", "Number of Question": 1 },
    { "Date": "26-05-2024", "Number of Question": 2 },
    { "Date": "27-05-2024", "Number of Question": 3 },
    { "Date": "28-05-2024", "Number of Question": 4 },
    { "Date": "29-05-2024", "Number of Question": 5 },
    { "Date": "30-05-2024", "Number of Question": 4 },
    { "Date": "31-05-2024", "Number of Question": 4 },
    { "Date": "01-06-2024", "Number of Question": 0 },
    { "Date": "02-06-2024", "Number of Question": 1 },
    { "Date": "03-06-2024", "Number of Question": 2 }
  ]);

  return (
    <div className='upperSec flex  mb-4   '>
      <div className='flex flex-col justify-evenly text-center h-[160px] w-[240px]   bg-white ml-10 mt-10 rounded-2xl'>
        <div className='font-bold text-2xl pt-2   text-slate-600'>Total Questions</div>
        <div className='font-bold text-8xl -mt-8 pt-4'>105</div>
      </div>

      <div className='flex justify-evenly h-[160px] rounded-3xl w-[800px]  ml-6 p-3 mt-10 bg-white  mb-4  '>
        <div>
          <div className='flex ml-10  mb-4   '>
            <div className='flex'>
              <div className='pr-1 font-bold'>67 </div>
              <div className='font-semibold text-slate-500'>Submission in past 6 months</div>
            </div>

            <div className='flex ml-20'>
              <div className='pr-1 text-slate-500 font-semibold'>Total Active Days:</div>
              <div className='font-bold'>35</div>
            </div>
          </div>
          <div><HeatmapCalender startDate={'2024-04-10'} endDate={'2024-06-03'} dataValues={userActivity} /></div>
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

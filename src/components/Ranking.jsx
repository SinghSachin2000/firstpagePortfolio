import React from 'react';
import photo1 from '../Assets/awa5.png';
import photo2 from '../Assets/awa6.png';
import photo3 from '../Assets/awa7.png';

const RankingData = [
  {
    "Chapter": "Chapter 1",
    "Current Ranking": 2892,
    "Min Ranking": 1982,
    "Performance": "Very Good",
    "url": photo1
  },
  {
    "Chapter": "Chapter 2",
    "Current Ranking": 2395,
    "Min Ranking": 2395,
    "Performance": "Good",
    "url": photo2
  },
  {
    "Chapter": "Chapter 3",
    "Current Ranking": 1233,
    "Min Ranking": 709,
    "Performance": "Excellent",
    "url": photo3
  }
];

const Ranking = () => {
  return (
    <div className='w-[400px] h-[550px] bg-white m-10 rounded-2xl p-4 flex flex-col items-center'>
          
    <div className='font-bold text-lg text-slate-600'>Ranking</div>


      {RankingData.map((item, index) => (
        <div key={index} className="ranking-item  flex flex-col items-center">
        <div className='h-[2px] w-[300px] rounded-full ml-5 mt-2 bg-slate-200'></div>
        <h2 className='font-bold text-lg text-slate-600 p-2'>{item.Chapter}</h2>

        <div className='flex justify-between'>

        <img src={item.url} alt={`Chapter ${index + 1}`} className="ranking-image w-22 h-[100px] pr-2" />

        <div className="ranking-details flex flex-col items-center pl-4">
        <p className='font-bold text-3xl'>{item["Current Ranking"]}</p>
        <p className='font-semibold'>min: {item["Min Ranking"]}</p>
        <p  className='font-semibold'> {item.Performance}</p>
      </div>

        </div>
    
        </div>
      ))}
    </div>
  );
};

export default Ranking;

import React, { useState } from 'react';

const chapData = [
  { key: 1, division: "chapter1", questions: 20 },
  { key: 2, division: "chapter2", questions: 32 },
  { key: 3, division: "chapter3", questions: 31 }
];

const TotalTest = ({ onSelectChapter }) => {
  const [selectedChapter, setSelectedChapter] = useState("chapter1");

  const handleChapter = (chapter) => {
    setSelectedChapter(chapter);
    onSelectChapter(chapter);
  };

  return (
    <div>
      <div className='w-[350px] sm:w-[400px] h-[200px] bg-white m-10 rounded-2xl flex justify-evenly text-center items-center'>
        <div>
          <div className='font-bold text-2xl text-slate-600'>Total Test</div>
          <div className='font-bold text-8xl'>86</div>
        </div>

        <div>
          {chapData.map(chapter => (
            <div
              key={chapter.key}
              className={`pb-2 cursor-pointer p-2 rounded-lg ${selectedChapter === chapter.division ? 'bg-gray-300' : ''}`}
              onClick={() => handleChapter(chapter.division)}
            >
              <span className='text-xl font-semibold text-slate-600'>{chapter.division}</span>
              <span className='pl-8 font-bold'>{chapter.questions}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalTest;

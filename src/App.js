import React,{useState} from 'react';
import './App.css';
import SideInfo from './components/SideInfo';
import TopDatesQues from './components/TopDatesQues';
import TotalTest from './components/TotalTest';
import TestScore from './components/TestScore';
import Awards from './components/Awards';
import TopicAnalysis from './components/TopicAnalysis';
import QuesSolved from './components/QuesSolved';
import Ranking from './components/Ranking';


function App() {
  const [selectedChapter, setSelectedChapter] = useState("chapter1");

  const handleSelectChapter = (chapter) => {
    setSelectedChapter(chapter);
  };
  return (
    <div className='mainApp flex flex-col sm:flex-row'>

       <SideInfo/>

       <div>
          <TopDatesQues/>

           <div className='scawldata scroll-auto flex'>
               <div className='heatSec'>
                 <TotalTest onSelectChapter={handleSelectChapter} />
                 <TestScore selectedChapter={selectedChapter} />
                 <Awards/>
                 <TopicAnalysis/>
               </div>

               <div> 
                <QuesSolved/>
                <Ranking/>
              </div>
           </div>
        </div>
    
    </div>
  );
}

export default App;

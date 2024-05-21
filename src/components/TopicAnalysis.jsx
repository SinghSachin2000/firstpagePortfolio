import React from 'react'
import { ResponsiveContainer,BarChart,Bar,YAxis,XAxis,Tooltip,Cell} from 'recharts'

const TopicData = [
    {
        "id": 1,
        "topic": "Topic 1",
        "count": 10
    },
    {
        "id": 2,
        "topic": "Topic 2",
        "count": 6
    },
    {
        "id": 3,
        "topic": "Topic 3",
        "count": 9
    },
    {
        "id": 4,
        "topic": "Topic 4",
        "count": 3
    },
    {
        "id": 5,
        "topic": "Topic 5",
        "count": 11
    },
    {
        "id": 6,
        "topic": "Topic 6",
        "count":5
    },
    {
        "id": 7,
        "topic": "Topic 7",
        "count": 4
    },
    {
        "id": 8,
        "topic": "Topic 8",
        "count": 7
    },
    {
        "id": 9,
        "topic": "Topic 9",
        "count": 10
    },
    {
        "id": 10,
        "topic": "Topic 10",
        "count": 8
    },
    {
        "id": 11,
        "topic": "Topic 11",
        "count": 9
    },
    {
        "id": 12,
        "topic": "Topic 12",
        "count":6
    },
    {
        "id": 13,
        "topic": "Topic 13",
        "count": 9
    },
    {
        "id": 14,
        "topic": "Topic 14",
        "count": 7
    },
    {
        "id": 15,
        "topic": "Topic 15",
        "count": 8
    }
]
const colors = [
    "#8884d8", "#82ca9d", "#ffc658", "#d0ed57", "#a4de6c",
    "#8dd1e1", "#83a6ed", "#8a84d8", "#84d8a4", "#ca9d82",
    "#d8884d", "#d8848d", "#d84d8a", "#4d84d8", "#a48dd8"
];

const TopicAnalysis = () => {
 
  return (
    <div>
      <div className=' w-[350px] sm:w-[400px] bg-white h-[450px] sm:h-[500px] m-10 rounded-2xl p-4 mb-[30px]' >
      
        <div className='font-bold text-slate-600 pl-9'>Topic Analysis</div>
         <div className='p-4'>
         <ResponsiveContainer width='100%' height='' aspect={0.8}>
            <BarChart data={TopicData} layout="vertical" barGap={5} barCategoryGap="15%" >
            <XAxis type="number" interval={5} axisLine={false} tickLine={false} />
              <YAxis dataKey="topic" type="category" interval={0} axisLine={false} tickLine={false}/>
                <Tooltip/>    
                <Bar dataKey="count" barSize={30}>
                {TopicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Bar>
            </BarChart>
         </ResponsiveContainer>
         </div>
      </div>
    </div>
  )
}


export default TopicAnalysis

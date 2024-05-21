// TestScore.jsx
import React from 'react';
import { ResponsiveContainer, LineChart, Line, Tooltip, Legend } from 'recharts';

const chapterData = [
    { chapter: 1, numberOfTests: 6 },
    { chapter: 2, numberOfTests: 8 },
    { chapter: 3, numberOfTests: 9 }
];

const scoreDistribution = {
    chapter1: [
        { testName: "Weekly test 1", testScore: 45 },
        { testName: "Weekly test 2", testScore: 34 },
        { testName: "Weekly test 3", testScore: 56 },
        { testName: "Weekly test 4", testScore: 67 },
        { testName: "Weekly test 5", testScore: 12 },
        { testName: "Weekly test 6", testScore: 98 }
    ],
    chapter2: [
        { testName: "Weekly test 1", testScore: 45 },
        { testName: "Weekly test 2", testScore: 34 },
        { testName: "Weekly test 3", testScore: 56 },
        { testName: "Weekly test 4", testScore: 67 },
        { testName: "Weekly test 5", testScore: 12 },
        { testName: "Weekly test 6", testScore: 98 },
        { testName: "Weekly test 7", testScore: 34 },
        { testName: "Weekly test 8", testScore: 78 }
    ],
    chapter3: [
        { testName: "Weekly test 1", testScore: 45 },
        { testName: "Weekly test 2", testScore: 34 },
        { testName: "Weekly test 3", testScore: 56 },
        { testName: "Weekly test 4", testScore: 67 },
        { testName: "Weekly test 5", testScore: 12 },
        { testName: "Weekly test 6", testScore: 98 },
        { testName: "Weekly test 7", testScore: 102 },
        { testName: "Weekly test 8", testScore: 56 },
        { testName: "Weekly test 9", testScore: 89 }
    ]
};

const scoreData = {
    totalTests: 23,
    testDistribution: chapterData,
    scoreDistribution: scoreDistribution
};


const TestScore = ({ selectedChapter }) => {
    if (!scoreData.scoreDistribution[selectedChapter]) {
        return <div>Selected chapter data not found</div>;
    }

    const testData = scoreData.scoreDistribution[selectedChapter];

    const totalScore = testData.reduce((acc, curr) => acc + curr.testScore, 0);
    const latestTest = testData[testData.length - 1];

    return (
        <div className='w-[400px] h-[250px] bg-white m-10 rounded-2xl p-4'>
            <div className='flex justify-between'>
                <div className='mb-4 flex flex-col items-center p-4'>
                    <div className='font-bold text-slate-600'>Test Score</div>
                    <div className='font-bold text-4xl'>{totalScore}</div>
                </div>
                <div className='mb-4 p-4'>
                    <div className='font-bold text-slate-500'>24th Aug,2024 </div>
                    <div className='font-bold'>{latestTest.testName}</div>
                </div>
            </div>

            <div className='-mt-10'>
                <ResponsiveContainer width='100%' height='60%' aspect={3}>
                    <LineChart data={testData}>
                        <Tooltip />
                        <Line type="monotone" dataKey="testScore" stroke="yellow" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className='flex justify-between font-semibold'>
                <div>2022</div>
                <div>2024</div>
            </div>
        </div>
    );
};

export default TestScore;

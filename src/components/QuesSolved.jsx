import React from 'react';
import Chart from 'react-apexcharts';

const module1Data = [
  { name: 'Intro 1', value: 40 },
  { name: 'Intro 2', value: 22 },
  { name: 'Intro 3', value: 11 },
];

const module2Data = [
  { name: 'Chapter 1', value: 20 },
  { name: 'Chapter 2', value: 32 },
  { name: 'Chapter 3', value: 31 },
];

const QuesSolved = () => {
  const module1Values = module1Data.map(data => data.value);
  const module1Labels = module1Data.map(data => data.name);

  const module2Values = module2Data.map(data => data.value);
  const module2Labels = module2Data.map(data => data.name);

  return (
    <div>
      <div className='w-[350px] sm:w-[400px] h-[500px] bg-white m-10 rounded-2xl p-4 flex flex-col items-center'>
        <div className='font-bold text-lg text-slate-600'>Question Solved</div>
        <div className='h-[2px] w-[300px] rounded-full ml-5 mt-2 bg-slate-200'></div>
        <div className='flex flex-col items-center'>
          <div className='font-bold text-slate-600 p-4'>Module 1</div>
          <Chart
            type="donut"
            width={300}
            height={200}
            series={module1Values}
            options={{
              labels: module1Labels,
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        fontSize: '20px',
                        color: 'black',
                      },
                    },
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
              legend: {
                show: true,
                position: 'right',
                fontSize: '16px',
                fontWeight:'bold',
                labels: {
                  colors: ['#000'],
                  useSeriesColors: false,
                  fontSize: '14px',
                  fontWeight: 'bold', 
                },
                markers: {
                  width: 12,
                  height: 12,
                  radius: 0,
                },
                itemMargin: {
                  vertical: 5,
                },
              },
            }}
          />

          <div className='h-[2px] w-[300px] rounded-full ml-5 mt-2 bg-slate-200'></div>
          <div className='font-bold text-slate-600 p-4'>Module 2</div>
          <Chart
            type="donut"
            width={300}
            height={200}
            series={module2Values}
            options={{
              labels: module2Labels,
              plotOptions: {
                pie: {
                  donut: {
                    labels: {
                      show: true,
                      total: {
                        show: true,
                        fontSize: '20px',
                        color: 'black',
                      },
                    },
                  },
                },
              },
              dataLabels: {
                enabled: false,
              },
              legend: {
                show: true,
                position: 'right',
                fontSize: '16px',
                fontWeight:'bold',
                labels: {
                  colors: ['#000'],
                  useSeriesColors: false,
                  fontSize: '20px',
                  fontWeight: 'bold', 
                },
                markers: {
                  width: 12,
                  height: 12,
                  radius: 0,
                },
                itemMargin: {
                  vertical: 5,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuesSolved;

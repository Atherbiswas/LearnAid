import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const statistics = useLoaderData();
    return (
    <div className='container mt-3'>
        <h2>This is quiz statistics of different course:</h2>
        <div>
        {
         statistics.data.map(rechart => <div key={rechart.id}></div>)
        }
        </div>
        <ResponsiveContainer width='90%' height={400}>
        <LineChart width={300}
          height={400} data={statistics.data}>
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }}/>
          <YAxis />
          <Tooltip></Tooltip>
            <Line type="monotone" dataKey="total" stroke="#002E94" activeDot={{ r: 15 }} />
        </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const statistics = useLoaderData();
    return (
    <div>
        <div>
        {
         statistics.data.map(rechart => <div key={rechart.id}></div>)
        }
        </div>
        <LineChart width={500}
          height={400} data={statistics.data}>
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
            <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 12 }} />
        </LineChart>
        </div>
    );
};

export default Statistics;
import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from 'recharts';

import styles from '../styles/Graph.module.css'

const data = [
  { name: 'Number 1', x: 100, y: 200, z: 200, description: "This is a description!", link: '/test'},
  { name: 'Number 2', x: 120, y: 100, z: 260, description: "description!", link: '/test' },
  { name: 'Number 3', x: 170, y: 300, z: 400, description: "BRUHHH!", link: '/test' },
  { name: 'Number 4', x: 140, y: 250, z: 280, description: "Hello World!", link: '/test' }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, x, y, z, description, link } = payload[0].payload;
    return (
      <div className="custom-tooltip" style={{ background: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p className="label"><strong>{name}</strong></p>
        <p className="desc">{description}</p>
        <a className='link' href={link}>{link}</a>
      </div>
    );
  }

  return null;
};

// come back and update the Grid once theres more data but this is an idea
// need to fix the taping issue, hovering works but tapping doesnt
export default function Grid() {
  return (
    <ScatterChart
      width={350}
      height={350}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="x" />
      <YAxis type="number" dataKey="y" /> 
      <Tooltip content={<CustomTooltip />} />
      <Scatter name="A school" data={data} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Scatter>
    </ScatterChart>
  );
}

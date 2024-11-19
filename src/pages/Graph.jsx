import React, { useState } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell
} from 'recharts';

import styles from '../styles/Graph.module.css'
const data = [
  { name: 'Number 1', x: 100, y: 200, z: 200, description: "This is a description!", link: '/test' },
  { name: 'Number 2', x: 120, y: 100, z: 260, description: "description!", link: '/test' },
  { name: 'Number 3', x: 170, y: 300, z: 400, description: "BRUHHH!", link: '/test' },
  { name: 'Number 4', x: 140, y: 250, z: 280, description: "Hello World!", link: '/test' }
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const CustomTooltip = ({ data, position }) => {
  if (!data) return null;

  const { name, description, link } = data;

  return (
    <div
      className="custom-tooltip"
      style={{
        position: 'absolute',
        top: position.y + 10,
        left: position.x + 10,
        background: '#fff',
        padding: '10px',
        border: '1px solid #ccc',
       
        zIndex: 10
      }}
    >
      <p className="label"><strong>{name}</strong></p>
      <p className="desc">{description}</p>
      <a className="link" href={link}>{link}</a>
    </div>
  );
};

export default function Grid() {
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    console.log("Event:", e); // Debugging

    if (e && e.xValue !== undefined && e.yValue !== undefined) {
      // Find the closest matching point
      const clickedData = data.find(
        (d) => Math.abs(d.x - e.xValue) < 5 && Math.abs(d.y - e.yValue) < 5
      );

      if (clickedData) {
        console.log("Clicked Data:", clickedData); // Debugging
        setTooltipPosition({ x: e.chartX, y: e.chartY });
        setTooltipData(clickedData);
      } else {
        console.log("No matching data point found");
        setTooltipData(null); // Hide tooltip if no point matches
      }
    } else {
      console.log("No valid xValue or yValue");
      setTooltipData(null); // Hide tooltip if no valid xValue or yValue
    }
  };

  return (
    <div style={{ position: 'relative', width: '350px', height: '350px' }}>
      <ScatterChart
        width={350}
        height={350}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
        onClick={handleClick}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" />
        <YAxis type="number" dataKey="y" />
        <Scatter name="A school" data={data} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
      {/* Render Custom Tooltip */}
      {tooltipData && (
        <CustomTooltip 
        className={styles.tooltip}
          data={tooltipData}
          position={tooltipPosition}
        />
      )}
    </div>
  );
}

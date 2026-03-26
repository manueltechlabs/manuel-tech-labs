// ClusterChart.jsx
import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import Papa from 'papaparse';

// Helper to calculate padded axis range
const calculateRange = (values) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;
  const padding = range * 0.1; // 10% padding
  const paddedMin = min - padding;

  return [Math.max(0, paddedMin), max + padding];
};

export default function ClusterChart({ csvUrl, chartTitle, xField, yField, xName, yName }) {

  const [option, setOption] = useState({
    xAxis: { type: 'value' },
    yAxis: { type: 'value' },
    series: [{ type: 'scatter', data: [] }]
  });  

  useEffect(() => {
    if (!csvUrl) return;
    fetch(csvUrl)
      .then(res => res.text())
      .then(text => {
        const result = Papa.parse(text, { header: true, dynamicTyping: true });
        
        const xValues = result.data.map((row) => parseFloat(row[xField])).filter(val => !isNaN(val));
        const yValues = result.data.map((row) => parseFloat(row[yField])).filter(val => !isNaN(val));        
        const [xMin, xMax] = calculateRange(xValues);
        const [yMin, yMax] = calculateRange(yValues);

        const data = result.data.map(row => ({
          value: [row[xField], row[yField]],
          itemStyle: {
            color:
              row.cluster == 0 ? 'yellow' :
              row.cluster == 1 ? 'blue' :
              row.cluster == 2 ? 'red' :
              'black' // for noise (cluster -1)
          }
        }));

        const chartOption = {
          title: {text: chartTitle, left: 'center'}, // or 'left', 'right',
          xAxis: { type: 'value', name: xName, min: xMin, max: xMax, scale: true, axisLabel: { formatter: (value) => value.toFixed(1) }},
          yAxis: { type: 'value', name: yName, min: yMin, max: yMax, scale: true, axisLabel: { formatter: (value) => value.toFixed(1) }},
          series: [{ type: 'scatter', data, itemStyle: { color: 'auto' } }],
          tooltip: { trigger: 'item' }
        };
      setOption(chartOption);  
      })
      .catch(err => console.error('Error loading CSV:', err));          
  }, [csvUrl, xField, yField, xName, yName]);

  return (
    <ReactECharts
      option={option}
      lazyUpdate={true}
      style={{ height: '400px' }}
    />
  );
}
import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const Graph = ({ chartTitle, nodes, edges }) => {
  useEffect(() => {
    const chartDom = document.getElementById('graph-chart');
    const myChart = echarts.init(chartDom);

    const option = {
      title: {text: chartTitle, left: 'center'}, // or 'left', 'right',
      tooltip: {
        formatter: (params) =>
          params.dataType === 'edge'
            ? `${params.data.source} → ${params.data.target}${params.data.value ? '<br/>Weight: ' + params.data.value : ''}`
            : params.name
      },
      series: [
        {
          type: 'graph',
          layout: 'force',
          force: { repulsion: 1800, gravity: 0.1, edgeLength: 150, layoutAnimation: true },
          data: nodes.map(n => ({ ...n, symbolSize: 50, label: { show: true } })),
          edges: edges.map(e => ({
            ...e,
            lineStyle: { width: e.value ? e.value * 10 : 2 },
            label: { show: !!e.value, formatter: e.value?.toFixed(3) }
          })),
          labelLayout: {            
            hideOverlap: true,    // Hide overlapping labels
            moveOverlap: 'shiftY' // Shift labels to avoid clash
          },
          edgeSymbol: ['none', 'arrow'],
          edgeSymbolSize: 15,
          roam: true
        }
      ]
    };

    myChart.setOption(option);
    return () => myChart.dispose();
  }, [nodes, edges]);

  return <div id="graph-chart" style={{ width: '100%', height: '600px' }} />;
};

export default Graph;
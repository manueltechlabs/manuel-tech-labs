import ReactECharts from 'echarts-for-react';

export default function AgeChart({title, categories, values, seriesName, color, yMax, showLabels, orientation}) {
  const option = {
    title: { text: title },
    xAxis: { type: 'category', data: categories },
    yAxis: { type: 'value', max: yMax },
    series: [{        
        name:seriesName,
        type: 'bar',
        data: values,
        itemStyle: { color: color },
        label: { show: showLabels, formatter: '{c}' }
    }],
    tooltip: { trigger: 'item' }
  };

  return <ReactECharts option={option} style={{ height: '400px' }} />;
}
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


interface LineChartECGProps {
  data?: number[];
}

const data = [
    [1317888000000, 385.02],
    [1317974400000, 384.62],
    [1318060800000, 377.37],
    [1318147200000, 369.80],
    [1318406400000, 388.81],
    [1318492800000, 400.29],
    [1318579200000, 402.19],
    [1318665600000, 408.43],
    [1318752000000, 422.00],
    [1319011200000, 419.99],
    [1319097600000, 422.24],
    [1319184000000, 398.62],
    [1319270400000, 395.31],
    [1319356800000, 392.87],
    [1319616000000, 405.77],
    [1319702400000, 397.77],
    [1319788800000, 400.60],
    [1319875200000, 404.69],
    [1319961600000, 404.95],
    [1320024000000, 404.78],
    [1320283200000, 396.51],
    [1320369600000, 397.41],
    [1320456000000, 403.07],
    [1320542400000, 400.24],
    [1320628800000, 399.73],
    [1320888000000, 406.23],
    [1320974400000, 395.28],
    [1321060800000, 385.22],
    [1321147200000, 384.62],
    [1321233600000, 379.26],
    [1321492800000, 388.83],
    [1321579200000, 384.77],
    [1321665600000, 377.41],
    [1321752000000, 374.94],
    [1321838400000, 369.01],
    [1322097600000, 376.51],
    [1322184000000, 366.99],
    [1322270400000, 363.57],
  ];
  
  const options = {
    chart: {
      zoomType: "x",
    },
    title: {
      text: "Zoomable Line Chart",
    },
    xAxis: {
      type: "datetime",
    },
    yAxis: {
      title: {
        text: "Value",
      },
    },
    series: [
      {
        name: "Data",
        data: data,
      },
    ],
    rangeSelector: {
      selected: 1,
    },
    navigator: {
      enabled: true,
    },
    scrollbar: {
      enabled: true,
    },
  };
  
  

const LineChartECG: React.FC<LineChartECGProps> = ({ data }) => {
  // Logic for rendering the line chart using the provided data

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChartECG;



import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useDataContext } from "contexts/useDataContext/useDataContext";

interface LineChartECGProps {
  data?: number[];
}

const options = {
  chart: {
    zoomType: "xy",
  },
  title: {
    text: "ECG Data",
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
      data: [],
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

const LineChartECG: React.FC<LineChartECGProps> = () => {
  const { data, loadData } = useDataContext();

  console.log(data);
  
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChartECG;

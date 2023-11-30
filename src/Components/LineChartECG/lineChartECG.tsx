import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getHighChartOptions } from "utils/getHighChartOptions/getHighChartOptions";

export interface LineChartECGProps {
  data: Number[][];
}

const LineChartECG = ({ data }: LineChartECGProps) => {
  console.log(data);

  const options = getHighChartOptions({data});
  
  console.log(options)

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChartECG;

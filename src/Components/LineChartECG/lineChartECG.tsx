import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { getHighChartOptions } from "utils/getHighChartOptions/getHighChartOptions";

export interface LineChartECGProps {
  data: Number[][];
}

const LineChartECG = ({ data }: LineChartECGProps) => {
  const options = getHighChartOptions({ data });

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LineChartECG;

import { LineChartECGProps } from "components/LineChartECG/lineChartECG";

export const getHighChartOptions =({ data }: LineChartECGProps)=> {
    const options ={
        chart: {
            zoomType: "xy",
          },
          title: {
            text: "ECG Data",
          },
          xAxis: {
            type: "time",
          },
          yAxis: {
            categories: 'ejjeje',
            enableMouseWheelZoom: true,
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
    }
    return options;
  };
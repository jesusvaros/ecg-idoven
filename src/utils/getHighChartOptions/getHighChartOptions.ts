import { LineChartECGProps } from "components/LineChartECG/lineChartECG";
import { theme } from "theme/themes";

export const getHighChartOptions = ({ data }: LineChartECGProps) => {
  const options = {
    chart: {
      zoomType: "x",
      height: 600,
      backgroundColor: theme.palette.primary.main,
      animation: false,
    },
    title: {
      text: 'ECG Chart',
      style: {
        color: theme.palette.common.white,
      }
    },
    xAxis: {
      enableMouseWheelZoom: true,
      title: {
        text: "Time",
        style: {
          color: theme.palette.common.white,
        },
      },
      labels: {
        style: {
          color: theme.palette.common.white,
        },
      },
    },
    yAxis: {
      title: {
        text: "um",
        style: {
          color: theme.palette.common.white,
        },
      },
      labels: {
        style: {
          color: theme.palette.common.white,
        },
      },
    },
    series: [
      {
        name: "Data",
        data: data,
        yAxis: 0,
        showInLegend: false,
      },
    ],
    
    plotOptions: {
      series: {
        animation: false,
        color: theme.palette.warning.main,
        lineWidth: 1,
        marker: {
          enabled: false,
        },
      },
    },
    rangeSelector: {
      selected: 1,
    },
    
   
  };
  return options;
};

import { Typography } from "@mui/material";
import React from "react";
import { PageContainer } from "./Home.styles";
import LineChartECG from "components/LineChartECG/lineChartECG";

export const Home: React.FC = () => {

  
  return (
    <PageContainer>
      <Typography variant="h1" color={'white'}>Welcome</Typography>
      <LineChartECG/>
    </PageContainer>
  );
};

 

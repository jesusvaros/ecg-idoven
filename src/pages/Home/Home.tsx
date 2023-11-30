import React from "react";
import { ButtonPrimary, PageContainer } from "./Home.styles";
import LineChartECG from "components/LineChartECG/lineChartECG";

import Loader from "components/Loader/Loader";
import { useDataContext } from "contexts/useDataContext/useDataContext";
import { useEffect, useState } from "react";
import { NUMBER_OF_DATA } from "utils/constants";
import { getDataRange } from "utils/getDataRange/getDataRange";
import { Box } from "@mui/material";

export const Home = () => {
  const { data, loadData } = useDataContext();
  const [trimmedData, setTrimmedData] = useState<Number[][] | []>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const isDataLoaded = data.length > 1;

  const onClickNextPage = () => {
    loadData();
    setCurrentPage(currentPage + 1);
  };

  const onClickPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    async function loadMore() {
      const isEndOfData = currentPage * NUMBER_OF_DATA >= data.length;
      if (isEndOfData || data.length === 0) {
        await loadData();
      }

      const [start, end] = getDataRange(currentPage);
      setTrimmedData(data.slice(start, end));
    }

    loadMore();
  }, [data, currentPage, loadData]);

  if (!isDataLoaded) {
    return (
      <PageContainer>
        <Loader text="Loading data..." />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <LineChartECG data={trimmedData} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "12px 24px",
        }}
      >
        <ButtonPrimary
          disabled={currentPage === 1}
          onClick={onClickPrevPage}
          variant="contained"
        >
          Load previus Page
        </ButtonPrimary>
        <ButtonPrimary onClick={onClickNextPage} variant="contained">
          Load next Page
        </ButtonPrimary>
      </Box>
    </PageContainer>
  );
};

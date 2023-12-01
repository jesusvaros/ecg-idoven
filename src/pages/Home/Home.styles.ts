import { Box, Button, styled } from "@mui/material";

export const PageContainer = styled(Box)`
  display: flex;
  height: calc(100vh - 64px);
  background-color: ${({ theme }) => theme.palette.primary.main};
  flex-direction: column;
  gap: 12px;
`;

export const ButtonPrimary = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  :disabled {
    color: ${({ theme }) => theme.palette.common.white};
    background-color: ${({ theme }) => theme.palette.secondary.main};
    opacity: 0.5;
  }
  :hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

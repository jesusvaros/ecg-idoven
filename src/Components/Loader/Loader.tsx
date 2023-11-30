import { Box, CircularProgress } from "@mui/material";

interface LoaderProps {
  text?: string;
}

export default function Loader({ text }: LoaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        my: "auto",
        alignItems: "center",
        color: "white",
      }}
    >
      <CircularProgress color="secondary" />
      {text && (
        <Box mt="20px" fontSize="20px" fontWeight="500">
          {text}
        </Box>
      )}
    </Box>
  );
}

import { Box, Button, Typography, Stack, IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface PageNavProps {
  currentPage: number;
  totalPages: number;
  handlePagination: (newPage: number) => void;
}

export default function PostPagination({
  currentPage,
  totalPages,
  handlePagination,
}: PageNavProps) {
  return (
    <Box mt={2} display="flex" justifyContent="flex-end">
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton
          disabled={currentPage === 1}
          onClick={() => handlePagination(currentPage - 1)}
        >
          <ChevronLeftIcon />
        </IconButton>

        <Typography variant="body1">
          Page {currentPage} of {totalPages}
        </Typography>

        <IconButton
          disabled={currentPage === totalPages}
          onClick={() => handlePagination(currentPage + 1)}
        >
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

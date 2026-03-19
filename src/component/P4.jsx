import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded({ page, setPage, count }) {
  return (
    <Stack spacing={2} alignItems="center">
      <Pagination
        count={count}
        page={page}
        shape="rounded"
        onChange={(e, value) => setPage(value)}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",       // number text color
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "gray", // selected item background
            color: "white",          // selected item text
          }
        }}
      />
    </Stack>
  );
}
import { Pagination as MuiPagination } from '@mui/material';

interface PaginationProps {

}

export const Pagination = (props: PaginationProps) => {
  const { } = props;
  return (
    <div>
      <MuiPagination count={10} color="primary" />
    </div>
  );
};

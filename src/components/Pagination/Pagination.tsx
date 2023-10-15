import { Pagination as MuiPagination } from '@mui/material';
import { Select } from '../UI/Select/Select';
import styles from './Pagination.module.scss';

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;

  productsLimit: number;
  onChangeProductsLimit: (value: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const {
    pagesCount,
    currentPage, handleChangePage,
    productsLimit, onChangeProductsLimit,
  } = props;
  return (
    <div className={styles.pagination}>
      <MuiPagination count={pagesCount} page={currentPage} onChange={handleChangePage} color="primary" />
      <Select
        label=""
        defaultValue={productsLimit}
        selectItems={[
          { name: '4', value: 4 },
          { name: '8', value: 8 },
          { name: '12', value: 12 },
          { name: '16', value: 16 },
          { name: '20', value: 20 },
        ]}
        onChange={event => onChangeProductsLimit(event.target.value as number)}
        className={styles.pagination__select}
      />
    </div>
  );
};

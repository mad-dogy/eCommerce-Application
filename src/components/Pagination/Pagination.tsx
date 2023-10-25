import { Pagination as MuiPagination, SelectChangeEvent } from '@mui/material';

import { Select } from '../UI/Select/Select';

import styles from './Pagination.module.scss';

interface PaginationProps {
  pagesCount: number;
  currentPage: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;

  productsItemLimit: number;
  onChangeProductsLimit: (value: number) => void;
}

const selectItems = [
  { name: '4', value: 4 },
  { name: '8', value: 8 },
  { name: '12', value: 12 },
  { name: '16', value: 16 },
  { name: '20', value: 20 }
];

export const Pagination = (props: PaginationProps) => {
  const { pagesCount, currentPage, handleChangePage, productsItemLimit, onChangeProductsLimit } =
    props;

  const onChangePaginationSelectValue = (event: SelectChangeEvent<unknown>) => {
    onChangeProductsLimit(event.target.value as number);
  };

  return (
    <div className={styles.pagination}>
      <MuiPagination
        count={pagesCount}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
      />
      <Select
        defaultValue={productsItemLimit}
        selectItems={selectItems}
        onChange={onChangePaginationSelectValue}
        className={styles.pagination__select}
      />
    </div>
  );
};

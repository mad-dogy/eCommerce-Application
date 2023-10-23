import { useEffect, useState } from 'react';

import { ProductItem } from '../ProductItem/ProductItem';
import { ProductItemModal } from '../ModalWindows/ProductItemModal/ProductItemModal';
import { Pagination } from '../Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { catalogSlice } from '../../store/reducers/catalogSlice';
import { useDebounce } from '../../hooks/useDebounce';
import { Loader } from '../UI/Loader/Loader';
import { fetchProducts } from '../../store/reducers/actionCreators/catalogActionCreators';
import { getCatalogProducts } from '../../store/selectors/getCatalogFields/getCatalogProducts';
import { getCatalogLimit } from '../../store/selectors/getCatalogFields/getCatalogProductsLimit';
import { getCatalogPagesAmount } from '../../store/selectors/getCatalogFields/getCatalogPagesAmount';
import { getCatalogCurrentPageNumber } from '../../store/selectors/getCatalogFields/getCatalogCurrentPageNumber';
import {
  getCatalogQueryString,
  getCatalogSortOption,
  getCatalogSortOrder
} from '../../store/selectors/getCatalogFields/getCatalogFilterOptions';
import { getCatalogLoading } from '../../store/selectors/getCatalogFields/getCatalogLoading';
import { getCatalogError } from '../../store/selectors/getCatalogFields/getCatalogError';

import styles from './ProductsList.module.scss';

const { setLimit, setCurrentPageNumber } = catalogSlice.actions;

export const ProductsList = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getCatalogProducts);
  const limit = useAppSelector(getCatalogLimit);
  const pagesAmount = useAppSelector(getCatalogPagesAmount);
  const currentPageNumber = useAppSelector(getCatalogCurrentPageNumber);
  const queryString = useAppSelector(getCatalogQueryString);
  const querySortOption = useAppSelector(getCatalogSortOption);
  const querySortOrder = useAppSelector(getCatalogSortOrder);
  const isLoading = useAppSelector(getCatalogLoading);
  const error = useAppSelector(getCatalogError);

  const dispatchFetchProducts = () => {
    dispatch(
      fetchProducts(
        limit,
        (currentPageNumber - 1) * limit,
        queryString,
        querySortOption,
        querySortOrder
      )
    );
  };

  const debauncedSearch = useDebounce(dispatchFetchProducts, 500);

  useEffect(() => {
    debauncedSearch();
  }, [queryString]);

  useEffect(() => {
    dispatchFetchProducts();
  }, [querySortOption, querySortOrder]);

  const onLimitChange = (value: number) => {
    dispatch(setLimit(value));
    dispatchFetchProducts();
  };
  const onCurrentPageNumberChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPageNumber(value));
    dispatchFetchProducts();
  };

  const [currentProductId, setCurrentProductId] = useState<string | undefined>(undefined);

  const onProductItemClick = (productId: string) => {
    setCurrentProductId(productId);
  };
  const onCloseModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentProductId(undefined);
  };

  let productsItemsContent;
  if (products.length) {
    productsItemsContent = (
      <div className={styles.list__container}>
        {products.map((item) => (
          <ProductItem product={item} onClick={onProductItemClick} />
        ))}
      </div>
    );
  } else if (error) {
    productsItemsContent = <div>{error}</div>;
  } else {
    productsItemsContent = <div>Products list is empty</div>;
  }

  return (
    <div className={styles.list}>
      {isLoading ? <Loader /> : <div>{productsItemsContent}</div>}

      <ProductItemModal productId={currentProductId} onCloseBtnClick={onCloseModal} />

      <Pagination
        pagesCount={pagesAmount}
        currentPage={currentPageNumber}
        handleChangePage={onCurrentPageNumberChange}
        productsItemLimit={limit}
        onChangeProductsLimit={onLimitChange}
      />
    </div>
  );
};

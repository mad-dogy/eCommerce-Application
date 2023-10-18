import React, { useEffect, useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductItemModal } from '../ModalWindows/ProductItemModal/ProductItemModal';
import { Pagination } from '../Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { catalogSlice } from '../../store/reducers/catalogSlice';
import { fetchProducts } from '../../store/reducers/actionCreators';
import { useDebounce } from '../../hooks/useDebounce';
import { Loader } from '../UI/Loader/Loader';
import styles from './ProductsList.module.scss';

const {
  setLimit,
  setCurrentPageNumber,
} = catalogSlice.actions;

export const ProductsList = () => {
  const dispatch = useAppDispatch();
  const {
    products,
    limit,
    pagesAmount,
    currentPageNumber,
    queryString,
    querySortOption,
    querySortOrder,
    isLoading,
    error,
  } = useAppSelector(state => state.catalogReducer);

  const dispatchFetchProducts = () => {
    dispatch(fetchProducts(
      limit,
      (currentPageNumber - 1) * limit,
      queryString,
      querySortOption,
      querySortOrder,
    ));
  };

  const debauncedSearch = useDebounce(dispatchFetchProducts, 500);

  useEffect(() => {
    debauncedSearch();
  }, [queryString]);

  useEffect(() => {
    dispatchFetchProducts();
  }, [querySortOption, querySortOrder, limit, currentPageNumber]);

  const onLimitChange = (value: number) => {
    dispatch(setLimit(value));
  };
  const onCurrentPageNumberChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPageNumber(value));
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
        {products.map(item => <ProductItem product={item} onClick={onProductItemClick} />)}
      </div>
    );
  } else if (error) {
    productsItemsContent = <div>{error}</div>;
  } else {
    productsItemsContent = <div>Products list is empty</div>;
  }

  return (
    <div className={styles.list}>
      {isLoading
        ? <Loader />
        : <div>{productsItemsContent}</div>}

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

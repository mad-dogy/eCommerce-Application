import { ProductProjection } from '@commercetools/platform-sdk';
import React, { useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductItemModal } from '../ModalWindows/ProductItemModal/ProductItemModal';
import { Pagination } from '../Pagination/Pagination';
import styles from './ProductsList.module.scss';

interface ProductsContainerProps {
  products: ProductProjection[];
  pagesCount: number;

  currentPage: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;

  productsLimit: number;
  onChangeProductsLimit: (value: number) => void;
}

export const ProductsList = (props: ProductsContainerProps) => {
  const {
    products,
    pagesCount,
    currentPage, handleChangePage,
    productsLimit, onChangeProductsLimit,
  } = props;

  const [currentProductId, setCurrentProductId] = useState('');

  const onItemClick = (productId: string) => {
    setCurrentProductId(productId);
  };
  const onCloseModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentProductId('');
  };

  return (
    <div className={styles.list}>
      {products.length
        ? (
          <div className={styles.list__container}>
            {products.map(item => <ProductItem product={item} onItemClick={onItemClick} />)}
          </div>
        )
        : 'Products list is empty'}

      <ProductItemModal productId={currentProductId} onCloseBtnClick={onCloseModal} />
      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
        productsLimit={productsLimit}
        onChangeProductsLimit={onChangeProductsLimit}
      />
    </div>
  );
};

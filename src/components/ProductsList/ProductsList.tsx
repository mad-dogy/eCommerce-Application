import { Product, ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import React, { useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductItemModal } from '../ModalWindows/ProductItemModal/ProductItemModal';
import { Pagination } from '../Pagination/Pagination';
import styles from './ProductsList.module.scss';

interface ProductsContainerProps {
  products: Product[];
  pagesCount: number;
}

export const ProductsList = (props: ProductsContainerProps) => {
  const { products, pagesCount } = props;

  const [currentProductId, setCurrentProductId] = useState('');
  const [page, setPage] = useState(1);

  const onItemClick = (productId: string) => {
    setCurrentProductId(productId);
  };
  const onCloseModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentProductId('');
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className={styles.list}>
      <div className={styles.list__container}>
        {products.map(item => <ProductItem product={item} onItemClick={onItemClick} />)}
      </div>
      <ProductItemModal productId={currentProductId} onCloseBtnClick={onCloseModal} />
      <Pagination
        pagesCount={pagesCount}
        page={page}
        handleChangePage={handleChangePage}
      />
    </div>
  );
};

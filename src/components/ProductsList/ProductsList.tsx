import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import React, { useState } from 'react';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductItemModal } from '../ModalWindows/ProductItemModal/ProductItemModal';
import styles from './ProductsList.module.scss';

interface ProductsContainerProps {
  productsInfo: ProductPagedQueryResponse;
}

export const ProductsList = (props: ProductsContainerProps) => {
  const { productsInfo } = props;

  const [currentProductId, setCurrentProductId] = useState('');

  const products = productsInfo.results;

  const onItemClick = (productId: string) => {
    setCurrentProductId(productId);
  };
  const onCloseModal = (event: React.MouseEvent) => {
    event.stopPropagation();
    setCurrentProductId('');
  };

  return (
    <div className={styles.container}>
      {products.map(item => <ProductItem product={item} onItemClick={onItemClick} />)}
      <ProductItemModal productId={currentProductId} onCloseBtnClick={onCloseModal} />
    </div>
  );
};

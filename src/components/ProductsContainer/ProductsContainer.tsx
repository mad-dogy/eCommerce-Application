import { FC } from 'react';

interface ProductsContainerProps {
  products: string;
}

export const ProductsContainer = (props: ProductsContainerProps) => {
  const { products } = props;
  return (
    <div>Products container</div>
  );
};

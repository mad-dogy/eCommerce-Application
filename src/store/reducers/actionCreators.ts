import { queryProducts, querySortProducts } from '../../api/Products/Products';
import { AppDispatch } from '../store';
import { catalogSlice } from './catalogSlice';

export const fetchProducts = (
  productsRequestLimit: number,
  productsRequestOffset: number,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(catalogSlice.actions.productsFetching());
    const products = await queryProducts(productsRequestLimit, productsRequestOffset);
    dispatch(catalogSlice.actions.productsFetchingSuccess(products));
  } catch (error) {
    dispatch(catalogSlice.actions.productsFetchingError(error.message));
  }
};

export const fetchSortProducts = (
  productsRequestLimit: number,
  productsRequestOffset: number,
  option: string,
  order: string,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(catalogSlice.actions.sortProductsFetching());
    const products = await querySortProducts(
      productsRequestLimit,
      productsRequestOffset,
      option,
      order,
    );
    dispatch(catalogSlice.actions.sortProductsFetchingSuccess(products));
  } catch (error) {
    dispatch(catalogSlice.actions.sortProductsFetchingError(error.message));
  }
};

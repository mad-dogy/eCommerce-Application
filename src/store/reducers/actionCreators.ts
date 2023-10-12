import { queryProducts, querySortProducts } from '../../api/Products/Products';
import { AppDispatch } from '../store';
import { catalogSlice } from './catalogSlice';

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(catalogSlice.actions.productsFetching());
    const products = await queryProducts();
    dispatch(catalogSlice.actions.productsFetchingSuccess(products));
  } catch (error) {
    dispatch(catalogSlice.actions.productsFetchingError(error.message));
  }
};

export const fetchSortProducts = (
  option: string,
  order: string,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(catalogSlice.actions.sortProductsFetching());
    const products = await querySortProducts(option, order);
    dispatch(catalogSlice.actions.sortProductsFetchingSuccess(products));
  } catch (error) {
    dispatch(catalogSlice.actions.sortProductsFetchingError(error.message));
  }
};

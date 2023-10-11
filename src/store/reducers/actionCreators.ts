import { queryProducts } from '../../api/Products/Products';
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

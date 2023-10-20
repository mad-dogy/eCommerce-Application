import { productsProjectionSearch } from '../../../api/Products/Products';
import { AppDispatch } from '../../store';
import { catalogSlice } from '../catalogSlice';

export const fetchProducts = (
  productsRequestLimit: number,
  productsRequestOffset: number,
  searchString: string,
  option: string,
  order: string,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(catalogSlice.actions.productsFetchingWithSearch());

    const productsProjectionSearchResponse = await productsProjectionSearch(
      productsRequestLimit,
      productsRequestOffset,
      searchString,
      option,
      order,
    );

    dispatch(catalogSlice.actions.productsFetchingWithSearchSuccess(
      productsProjectionSearchResponse,
    ));
  } catch (error) {
    dispatch(catalogSlice.actions.productsFetchingWithSearchError(error.message));
  }
};

import {
  ProductProjectionSearchProps,
  productsProjectionSearch
} from '../../../api/Products/Products';
import { AppDispatch } from '../../store';
import { catalogSlice } from '../catalogSlice';

export const fetchProducts =
  (props: ProductProjectionSearchProps) => async (dispatch: AppDispatch) => {
    const { productsLimit, productsOffset, searchText, sortOption, sortOrder } = props;

    try {
      dispatch(catalogSlice.actions.productsFetchingWithSearch());

      const productsProjectionSearchResponse = await productsProjectionSearch({
        productsLimit,
        productsOffset,
        searchText,
        sortOption,
        sortOrder
      });

      dispatch(
        catalogSlice.actions.productsFetchingWithSearchSuccess(productsProjectionSearchResponse)
      );
    } catch (error) {
      dispatch(catalogSlice.actions.productsFetchingWithSearchError(error.message));
    }
  };

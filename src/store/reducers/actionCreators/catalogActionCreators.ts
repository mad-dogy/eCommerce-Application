import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';

import {
  ProductProjectionSearchProps,
  productsProjectionSearch
} from '../../../api/Products/Products';

export const fetchProducts = createAsyncThunk<
  ProductProjectionPagedQueryResponse,
  ProductProjectionSearchProps,
  { rejectValue: string }
>('catalog/fetchAll', async (props, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  const { productsLimit, productsOffset, searchText, sortOption, sortOrder } = props;

  try {
    const productsProjectionSearchResponse = await productsProjectionSearch({
      productsLimit,
      productsOffset,
      searchText,
      sortOption,
      sortOrder
    });

    return productsProjectionSearchResponse;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Something went wrong on products projection search response');
  }
});

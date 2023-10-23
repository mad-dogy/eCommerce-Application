import {
  QuerySortOptionNameType,
  QuerySortOptionValueType,
  QuerySortOrderNameType,
  QuerySortOrderValueType
} from '../../store/reducers/catalogSlice';

export interface QuerySortOptionType {
  name: QuerySortOptionNameType;
  value: QuerySortOptionValueType;
}

export interface QuerySortOrderType {
  name: QuerySortOrderNameType;
  value: QuerySortOrderValueType;
}

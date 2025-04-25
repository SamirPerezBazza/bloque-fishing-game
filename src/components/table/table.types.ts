
export interface Props<T> {
  data: T[];
  columns: Array<keyof T>;
  isLoading?: boolean;
  title?: string;
}

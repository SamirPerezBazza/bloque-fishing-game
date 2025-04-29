
export interface Props<T> {
  data: T[];
  columns: Array<keyof T>;
  title?: string;
  disableHeader?: boolean;
}

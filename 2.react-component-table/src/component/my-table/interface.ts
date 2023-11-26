import { HTMLAttributes, ReactElement, ReactNode } from "react";

export interface TableProps extends Omit<HTMLAttributes<Element>, "data"> {
  rowKey: string | ((record: any) => React.Key);
  dataSource: Array<any>;

  // {
  // label: string;
  // expand?: boolean;
  // enableRefresh?: boolean;
  // data: Array<any>;
  // }
  children?: ReactElement | null | undefined;
  width?: CSSStyleDeclaration["width"];
  columns: Array<ColumnProps>;
}
export interface DataInterface {
  [key: string]: any;
}
export interface ColumnProps extends Omit<HTMLAttributes<Element>, "title"> {
  title: ReactNode | string;
  dataIndex: string;
  showSort?: boolean;
  children?: ReactNode;
}
export type IconStateType = "up" | "down" | "reset" | undefined;

export type SortKeyType = {
  key: string | undefined;
  hightLight: IconStateType;
};

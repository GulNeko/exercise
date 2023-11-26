import React, { useCallback, useEffect, useRef, useState } from "react";
import { IconStateType, SortKeyType, TableProps } from "./interface";
import "./index.css";
const GARY_ICON = "#ABABAB";
const BLUE_ICON = "#1677FF";

const UpIcon = (props: { fillColor: string }) => (
  <svg
    t="1700812524576"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="10120"
    width="12"
    height="12"
  >
    <path
      d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
      fill={props.fillColor}
      p-id="10121"
    ></path>
  </svg>
);
const DownIcon = (props: { fillColor: string }) => (
  <svg
    t="1700812484331"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="9122"
    width="12"
    height="12"
  >
    <path
      d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
      fill={props.fillColor}
      p-id="9123"
    ></path>
  </svg>
);

enum ICON_STATE_ENUM {
  UP = "up",
  DOWN = "down",
  RESET = "reset",
}
const MyTable = (totalProps: TableProps) => {
  const [data, setData] = useState(totalProps.dataSource);
  const [sortKey, setSortKey] = useState<SortKeyType>({
    key: undefined,
    hightLight: undefined,
  });
  const handleSort = (id: string, sort: IconStateType) => {
    let tempData = data;
    if (sort === ICON_STATE_ENUM.UP) {
      tempData = data.sort((a, b) => a[id] - b[id]);
      setSortKey({ key: id, hightLight: sort });
    } else if (sort === ICON_STATE_ENUM.DOWN) {
      tempData = data.sort((a, b) => b[id] - a[id]);

      setSortKey({ key: id, hightLight: sort });
    } else {
      tempData = totalProps.dataSource;
      setSortKey({ key: undefined, hightLight: undefined });
    }
    setData(tempData);
  };
  return (
    <table className="my_table">
      <thead className="my_table_thead">
        <tr className="my_table_thead_bgcolor">
          {totalProps.columns.map((column) => (
            <th key={column.dataIndex}>
              <div className="my_table_thead_column_wrapper">
                {column.title}
                {column.showSort ? (
                  <div
                    className="my_table_sort_wrapper"
                    onClick={() => {
                      if (column.dataIndex === sortKey.key) {
                        if (
                          !sortKey.hightLight ||
                          sortKey.hightLight === ICON_STATE_ENUM.RESET
                        ) {
                          handleSort(column.dataIndex, ICON_STATE_ENUM.UP);
                        } else if (sortKey.hightLight === ICON_STATE_ENUM.UP) {
                          handleSort(column.dataIndex, ICON_STATE_ENUM.DOWN);
                        } else {
                          handleSort(column.dataIndex, ICON_STATE_ENUM.RESET);
                        }
                      } else {
                        handleSort(column.dataIndex, ICON_STATE_ENUM.UP);
                      }
                    }}
                  >
                    <span className="my_table_sort_icon_wrapper">
                      <UpIcon
                        fillColor={
                          sortKey.key === column.dataIndex &&
                          sortKey.hightLight === ICON_STATE_ENUM.UP
                            ? BLUE_ICON
                            : GARY_ICON
                        }
                      ></UpIcon>
                    </span>
                    <span>
                      <DownIcon
                        fillColor={
                          sortKey.key === column.dataIndex &&
                          sortKey.hightLight === ICON_STATE_ENUM.DOWN
                            ? BLUE_ICON
                            : GARY_ICON
                        }
                      ></DownIcon>
                    </span>
                  </div>
                ) : null}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          const rowKey =
            typeof totalProps.rowKey === "function"
              ? totalProps.rowKey(row)
              : row[totalProps.rowKey];
          return (
            <tr key={rowKey} className="my_table_row_bgcolor">
              {totalProps.columns.map((column) => (
                <td key={column.dataIndex}>{row[column.dataIndex]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default MyTable;

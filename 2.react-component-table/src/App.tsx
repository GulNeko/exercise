import React from "react";
import "./App.css";
import MyTable from "./component/my-table/MyTable";
import { ColumnProps } from "./component/my-table/interface";

/**
 * 实现一个 Table 组件满足以下功能，如图 table.jpeg 所示
 * - 把数据渲染成表格
 * - 支持列排序
 * - 支持多列排序
 */

/**
 * 使用如下数据进行测试
 */
const testData: {
  name: string;
  chinese: number;
  math: number;
  english: number;
}[] = [
  {
    name: "Jim",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    name: "Tom",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    name: "Han",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    name: "Lilei",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const column = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Chinese",
    dataIndex: "chinese",
    showSort: true,
  },
  {
    title: "Math",
    dataIndex: "math",
    showSort: true,
  },
  {
    title: "English",
    dataIndex: "english",
    showSort: true,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Table 组件</h1>
      <div>使用 testData 数据在这里渲染实现的 Table 组件</div>
      <MyTable dataSource={testData} rowKey="name" columns={column} />
    </div>
  );
}

export default App;

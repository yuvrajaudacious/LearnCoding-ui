import React, { useState } from "react";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Tooltip } from "antd";
import Wellcome from "../Home/wellcomecard";
import Learncode from "../Home/LearnCode";
import Head2 from "./header2";
import styles from "./styles.module.css";
const { Content, Sider } = Layout;

const items1: string[] = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "PYTHON",
  "JAVA",
  "C++",
  "C#",
  "TYPESCRIPT",
  "PHP",
  "REACTJS",
  "NEXTJS",
  "NODEJS",
  "NESTJS",
];
const items2: MenuProps["items"] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `HTML ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `HTML${subKey}`,
      };
    }),
  };
});

const Headers: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Menu
        className={styles.menuiteam}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
      >
        {/* <div className="demo-logo" ><img>hhh</img></div> */}
        {items1.map((language, index) => (
          <div>
            <Menu.Item key={String(index + 1)} title={language}>
              <Tooltip title={language}>{language}</Tooltip>
            </Menu.Item>
          </div>
        ))}
      </Menu>
      <Head2 />

      <Layout>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Wellcome />
          <Learncode />
        </Content>
      </Layout>
    </>
  );
};

export default Headers;

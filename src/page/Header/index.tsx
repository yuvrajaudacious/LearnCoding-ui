import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu } from "antd";
import Search from "antd/es/transfer/search";
import styles from "./styles.module.css";
const { Header } = Layout;

const HeaderComponent = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout>
        <Header className={styles.header}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://t3.ftcdn.net/jpg/03/92/80/46/360_F_392804645_tUQxo5EgPXvFGxn5OQguX1BiYlI6lCOV.jpg"
              alt="Logo"
              style={{ height: "31px", marginRight: "20px" }}
            />
            <Menu
              theme="light"
              mode="horizontal"
              style={{ borderBottom: "none" }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Paths</Menu.Item>
              <Menu.Item key="3">Projects</Menu.Item>
              <Menu.Item key="4">Clubs</Menu.Item>
            </Menu>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Search placeholder="Search" />
            <Dropdown overlay={menu}>
              <Button>
                Language <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </Header>
      </Layout>
    </>
  );
};

export default HeaderComponent;

"react";
import { Layout, Row, Col, Typography, Button, Card } from "antd";
import {
  MailOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.less";

const { Footer } = Layout;
const { Title, Text } = Typography;

const CustomFooter = () => {
  return (
    <Card className={styles.card}>
      <Footer className={styles.customFooter}>
        <Card className={styles.promoSection}>
          <img className={styles.image} src="https://developer.android.com/static/images/shared/pointing-1.gif"></img>
          <Text className={styles.promoSectiontext}>Start learning now</Text>
          <br></br>
          <Text className={styles.promoSectiontextR}>
            Build your dream Today Only $95 for a 40 hour complete course
          </Text>
          <Button
            type="primary"
            shape="round"
            size="large"
            className={styles.promoButton}
          >
            Join the course
          </Button>
        </Card>
        <Row gutter={[16, 16]} className={styles.infoSection}>
          <Col xs={24} sm={12} md={6}>
            <Title level={3} style={{ color: "#fff" }}>
              LearnCoding
            </Title>
            <Text style={{ color: "#fff" }}>© 2024. All rights reserved.</Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Navigation
            </Title>
            <Text style={{ color: "#fff" }}>Home</Text>
            <br />
            <Text style={{ color: "#fff" }}>Login</Text>
            <br />
            <Text style={{ color: "#fff" }}>Join</Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Contact
            </Title>
            <Text style={{ color: "#fff" }}>
              <MailOutlined /> Learncoding@gmail.com
            </Text>
            <br />
            <Text style={{ color: "#fff" }}>
              <TwitterOutlined /> @LearnCoding
            </Text>
            <br />
            <Text style={{ color: "#fff" }}>
              <LinkedinOutlined /> @LearnCoding
            </Text>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "#fff" }}>
              Blog
            </Title>
            <Text style={{ color: "#fff" }}>What is jQuery</Text>
            <br />
            <Text style={{ color: "#fff" }}>What is JavaScript</Text>
            <br />
            <Text style={{ color: "#fff" }}>How to make money with a blog</Text>
            <br />
            <Title level={4} style={{ color: "#fff" }}>
              Other
            </Title>
            <Text style={{ color: "#fff" }}>Quiz</Text>
          </Col>
        </Row>
      </Footer>
    </Card>
  );
};

export default CustomFooter;

import React from "react";
import { Row, Col, Card } from "antd";
import {
  ToolOutlined,
  GlobalOutlined,
  RiseOutlined,
  ClusterOutlined,
  LineChartOutlined,
  SyncOutlined,
} from "@ant-design/icons";
// import "./SelfDevelopment.css";
import styles from "./styles.module.less";
const { Meta } = Card;

const SelfDevelopment: React.FC = () => {
  const data = [
    {
      title: "Practical skills",
      description:
        "Our programming courses are focused on practice, meaning that theory is kept to a minimum, and course participants have the opportunity to create their projects and solve real problems.",
      icon: <ToolOutlined />,
    },
    {
      title: "Global opportunities",
      description:
        "Coding skills are universal and appreciated worldwide, opening doors to a wide range of employment opportunities, both in small startups and large corporations.",
      icon: <GlobalOutlined />,
    },
    {
      title: "Investment in the future",
      description:
        "Many experts point to programming as a crucial skill to base one's career development on in the 21st century. Investing in yourself and your professional development is a guaranteed and secure investment for the future.",
      icon: <RiseOutlined />,
    },
    {
      title: "Understanding technology",
      description:
        "Our programming training will help you understand how the technologies we use every day work. This knowledge is essential in a world that increasingly relies on digital solutions.",
      icon: <ClusterOutlined />,
    },
    {
      title: "Development of analytical thinking",
      description:
        "Programming requires the right approach to problem-solving, precise analysis, action planning, and dealing with problems that may arise. These skills are invaluable in many areas of life.",
      icon: <LineChartOutlined />,
    },
    {
      title: "Constantly evolving field",
      description:
        "Technology is constantly evolving, and new programming languages and tools are continually being created. Programming training will help you stay up-to-date with the latest trends and technologies.",
      icon: <SyncOutlined />,
    },
  ];

  return (
    <div className={styles.developmentcontainer}>
      <h2>Invest in self development</h2>
      <Row gutter={[16, 16]}>
        {data.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card hoverable className={styles.developmentcard}>
              {item.icon}
              <Meta
                title={item.title}
                description={item.description}
                style={{ marginTop: "10px" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SelfDevelopment;

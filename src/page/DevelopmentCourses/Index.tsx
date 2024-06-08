import React from "react";
import { Button, Card, Col, Row, Tag } from "antd";
import styles from "./styles.module.less";
import { ArrowRightOutlined } from "@ant-design/icons";
const { Meta } = Card;

const projects = [
  {
    title: "Web Development",
    description:
      "Web development front-end development, back-end development, and full stack development",
    tech: "Web Development",
    level: "Level",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu8KntXYhIOYUaM-UIs8IcJSSLmerEBw90Of4GC5Wegg&s",
  },
  {
    title: "App Development",
    description:
      "App development is the process of making software for smartphones, tablets and digital assistants.",
    tech: "App Development",
    level: "Level ",
    imageUrl:
      "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
  },
  {
    title: "Machine Learning",
    description:
      "Machine learning  is a branch of AI and computer science that focuses on the using data and algorithms ",
    tech: "Machine Learning",
    level: "Level ",
    imageUrl:
      "https://emeritus.org/in/wp-content/uploads/sites/3/2023/03/types-of-machine-learning.jpg.optimal.jpg",
  },
  {
    title: "Game Development",
    description:
      "Game Development is the art of creating games and describes the design, development ",
    tech: "Game Development",
    level: "",
    imageUrl:
      "https://media.licdn.com/dms/image/D5612AQERw7-m6vjS8g/article-cover_image-shrink_720_1280/0/1690116406938?e=2147483647&v=beta&t=_vg5Fbu8aVoyysfoBj33FY86Xgm4DI6X5GhqwnK3XsM",
  },
];

const DevelopmentCourses: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>What do you want to learn about?</span>
      <Card className={styles.card1}>
        <Row gutter={[16, 16]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={12} lg={6} key={index}>
              <Card
                className={styles.card}
                hoverable
                cover={
                  <img
                    className={styles.image}
                    alt={project.title}
                    src={project.imageUrl}
                  />
                }
              >
                <Meta title={project.title} description={project.description} />
                <div style={{ marginTop: "10px" }}>
                  <Tag color="#2b2a2c">{project.tech}</Tag>
                  <Tag >{project.level}</Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Button className={styles.button}>
          Learn More
          <ArrowRightOutlined />
        </Button>
      </Card>
    </div>
  );
};

export default DevelopmentCourses;

import { ArrowRightOutlined, RiseOutlined } from "@ant-design/icons";
import { Button, Card, Col, Layout, Row, Tag } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import styles from "./styles.module.less";
const { Header, Content, Footer } = Layout;

interface Course {
  title: string;
  description: string;
  progress: number;
  key: string;
}

const Course = [
  {
    title: "Introduction to web",
    description:
      "In this introduction to web development with HTML and CSS for beginners, you will learn how to structure and style webpages with images, lists, fonts, quotes, links, and animation., ",
    tech: "Web Development",
    level: "HTML & CSS:Level1",
    imageUrl:
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/HTML-and-CSS.png",
  },
  {
    title: "More webHTML,JavaScript!",
    description:
      "More web moves beyond the basics introduced in Introduction to web. Modern web design has turned websites from static and boring walls of information into ways of providing fun and engaging experiences to a user. Take users on a journey and transport them to somewhere completely new!",
    tech: "",
    level: "HTML & CSS:Level2 ",
    imageUrl:
      "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg",
  },
];

const WebDevelopment: React.FC = () => {
  return (
    <Layout className={styles.layout}>
      {" "}
      <Header className={styles.header}>
        {" "}
        <div className={styles.logo}>Web Development</div> <div></div>
      </Header>{" "}
      <Content style={{ padding: "0 50px" }}>
        {" "}
        <div className={styles["site-layout-content"]}>
          {" "}
          <Row gutter={[16, 16]}>
            {" "}
            {Course.map((project, index) => (
              <Col xs={24} sm={12} md={12} lg={6} key={index}>
                {" "}
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
                  <div className={styles.tag}>
                    <Tag color="#2b2a2c">
                      <RiseOutlined />
                      {project.level}
                    </Tag>{" "}
                  </div>
                  <Meta
                    className={styles.meta}
                    title={project.title}
                    description={project.description}
                  />{" "}
                  <div style={{ marginTop: "10px" }}>
                    {" "}
                    <Tag color="#2b2a2c">{project.tech}</Tag>{" "}
                  </div>{" "}
                </Card>{" "}
              </Col>
            ))}{" "}
          </Row>{" "}
          <Button className={styles.button}>
            {" "}
            Learn More <ArrowRightOutlined />{" "}
          </Button>{" "}
        </div>{" "}
      </Content>{" "}
      <Footer style={{ textAlign: "center" }}>
        {" "}
        <div>
          {" "}
          <a href="/">Send feedback</a> | <a href="/">Privacy</a> |{" "}
          <a href="/">Terms</a>{" "}
        </div>{" "}
      </Footer>{" "}
    </Layout>
  );
};
export default WebDevelopment;

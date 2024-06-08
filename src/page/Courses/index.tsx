import styles from "./styles.module.less";
import { Card, Col, Flex, Row, Space } from "antd";
const Courses = () => {
  return (
    <Space size={20} className={styles.container}>
      <Row gutter={[16, 16]}>
        <Col lg={6}>
          <Flex>
            <Card
              className={styles.card}
              style={{ width: 240 }}
              bodyStyle={{ padding: 10 }}
            >
              <div className={styles.customImage}>
                <img
                  alt="example"
                  width="100%"
                  src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998EFA4B5ABB7E9F0B"
                />
              </div>
              <div className={styles.customCard}>
                <h3>HTML Tutorial...</h3>
                <p>
                  HTML is the standard markup language for Web pages. With HTML
                  you can create your own Website. HTML is easy to learn - You
                  will enjoy it!
                </p>
              </div>
            </Card>
          </Flex>
        </Col>
        <Col lg={6}>
          <Flex>
            <Card
              className={styles.card}
              style={{ width: 240 }}
              bodyStyle={{ padding: 10 }}
            >
              <div className={styles.customImage}>
                <img
                  alt="example"
                  width="100%"
                  src="https://web-creator.ru/technologies/css3.png"
                />
              </div>
              <div className={styles.customCard}>
                <h3>CSS Tutorial...</h3>
                <p>
                  CSS is the language we use to style an HTML document. CSS
                  describes how HTML elements should be displayed. This tutorial
                  will teach you CSS from ...
                </p>
              </div>
            </Card>
          </Flex>
        </Col>
        <Col lg={6}>
          <Flex>
            <Card
              className={styles.card}
              style={{ width: 240 }}
              bodyStyle={{ padding: 10 }}
            >
              <div className={styles.customImage}>
                <img
                  alt="example"
                  width="100%"
                  // height="100%"
                  src="https://static.javatpoint.com/images/javascript/javascript_logo.png"
                />
              </div>
              <div className={styles.customCard}>
                <h3>JavaScript Tutorial</h3>
                <p>
                  simple, but detailed explanations with examples and tasks,
                  including: closures, document and events, object oriented
                  programming ...
                </p>
              </div>
            </Card>
          </Flex>
        </Col>
        <Col lg={6}>
          <Flex>
            <Card
              className={styles.card}
              style={{ width: 240 }}
              bodyStyle={{ padding: 10 }}
            >
              <div className={styles.customImage}>
                <img
                  alt="example"
                  width="100%"
                  src="https://www.nicepng.com/png/detail/222-2224705_react-js-logo.png"
                />
              </div>
              <div className={styles.customCard}>
                <h3>HTML Tutorial...</h3>
                <p>
                  React is a JavaScript library for building user interfaces.
                  React is used to build single-page applications. React allows
                  us to create reusable UI components.
                </p>
              </div>
            </Card>
          </Flex>
        </Col>
        <Col lg={6}>
          <Flex>
            <Card
              className={styles.card}
              style={{ width: 140 }}
              bodyStyle={{ padding: 0 }}
            >
              <div className={styles.customImage}>
                <img
                  alt="example"
                  width="100%"
                  src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F998EFA4B5ABB7E9F0B"
                />
              </div>
              <div className={styles.customCard}>
                <h3>HTML Tutorial...</h3>
                <p>
                  HTML is the standard markup language for Web pages. With HTML
                  you can create your own Website. HTML is easy to learn - You
                  will enjoy it!
                </p>
              </div>
            </Card>
          </Flex>
        </Col>
      </Row>
    </Space>
  );
};

export default Courses;

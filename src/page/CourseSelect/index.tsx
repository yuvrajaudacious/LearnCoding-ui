import {
  Button,
  Card,
  Col,
  Flex,
  Row,
  Steps,
  message
} from "antd";
import React, { useState } from "react";
// import "antd/dist/antd.css";
import styles from "./styles.module.less"; // Custom CSS for styling

const { Step } = Steps;

const CourseSelect: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      content: "What do you want to learn about?",
      options: [
        "Web Development",
        "Data Science",
        "Computer Science",
        "Web Design",
        "Artificial Intelligence",
        "Machine Learning",
        "Game Development",
        "Mobile Development",
        "Data Visualization",
        "Not sure yet",
      ],
    },
    {
      content: "What do you want to achieve?",
      options: [
        "Switch careers",
        "Learn a skill for my job",
        "Build a project",
        "Learn for school",
        "Learn for fun",
        "Not sure yet",
      ],
    },
    {
      content: "How much coding experience do you have?      ",
      options: ["Beginner", " Intermediate", "Advanced"],
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onOptionClick = () => {
    if (current < steps.length - 1) {
      next();
    } else {
      message.success("All steps completed!");
    }
  };

  return (
    <div>
      <Flex justify="space-between">
        <div className={styles.container}>
          <h1 className={styles.h1}> Find what's right for you</h1>
          <p className={styles.p}>
            Answer 3 quick questions to get recommendations that match your
            interests.
          </p>
          <div className={styles.stepscontainer}>
            <Steps
              direction="vertical"
              current={current}
              className={styles.steps}
            >
              {steps.map((_item, index) => (
                <Step key={index} />
              ))}
            </Steps>
            <div className={styles.content}>
              <h3 className={styles.h3}>{steps[current].content}</h3>
              <Row gutter={[16, 16]}>
                {steps[current].options.map((option, index) => (
                  <Col span={12} key={index}>
                    <Card
                      hoverable
                      onClick={onOptionClick}
                      className={styles.optioncard}
                    >
                      {option}
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className={styles.navigationbuttons}>
                {current > 0 && (
                  <Button
                    type="primary"
                    style={{ margin: "0 8px" }}
                    onClick={prev}
                  >
                    Back
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>{" "}
        <Flex
          vertical
          justify="space-between"
          //   style={{ padding: 32 }}
        >
          <img
            className={styles.image}
            alt="avatar"
            src="https://user-images.githubusercontent.com/69011963/137184767-79a13ec7-1bb3-4341-a6da-3a149c9c159a.gif"
          ></img>
          {/* <p className={styles.pretext}>We have hundreds of courses that cover just about everything.</p> */}
        </Flex>
      </Flex>
    </div>
  );
};

export default CourseSelect;

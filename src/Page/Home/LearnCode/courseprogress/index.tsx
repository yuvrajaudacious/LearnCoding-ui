import React, { useState } from "react";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, Progress } from "antd";
import styles from "./styles.module.less";

interface Props {
  courseName: string;
}

const CourseProgress: React.FC<Props> = ({ courseName }) => {
  const [percent, setPercent] = useState<number>(0);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  let progressBarColor: string;

  const progressBarText =
    percent === 100 ? "Complete" : percent === 0 ? "Start" : "Pending";

  if (progressBarText === "Start") {
    progressBarColor = "#1890ff";
  } else if (progressBarText === "Pending") {
    progressBarColor = "#faad14";
  } else {
    progressBarColor = "#52c41a";
  }
  const handleGraphClick = () => {
    onSelectCourse();
  };
  return (
    <div onClick={handleGraphClick}>
      <Flex vertical gap="small">
        <Flex vertical gap="small">
          <span
            style={{ backgroundColor: progressBarColor }}
            className={styles.text}
          >
            {courseName} {progressBarText}
          </span>
          <Progress percent={percent} type="line" />
          <Progress percent={percent} type="circle" />
        </Flex>
        <Button.Group>
          <Button onClick={decline} icon={<MinusOutlined />} />
          <Button onClick={increase} icon={<PlusOutlined />} />
        </Button.Group>
      </Flex>
    </div>
  );
};

export default CourseProgress;
function onSelectCourse() {
    throw new Error("Function not implemented.");
}


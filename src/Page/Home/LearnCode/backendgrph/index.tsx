// import styles from "./styles.module.less";
import React from "react";
import { Line } from "@ant-design/charts";
import { Space } from "antd";
import styles from "./styles.module.less";

interface DataItem {
  technology: string;
  usage: number;
}
interface Props {
  onSelectCourse: () => void;
}

const BackendGraph: React.FC<Props> = ({ onSelectCourse }) => {
  const data: DataItem[] = [
    { technology: "Node.js", usage: 30 },
    { technology: "Express.js", usage: 25 },
    { technology: "MongoDB", usage: 20 },
    { technology: "SQL", usage: 15 },
    { technology: "Docker", usage: 10 },
    { technology: "AWS", usage: 5 },
  ];

  const config = {
    data,
    xField: "technology",
    yField: "usage",
    height: 200,
    point: {
      size: 4,
      shape: "diamond",
    },
  };
  const handleGraphClick = () => {
    onSelectCourse();
  };
  return (
    <div onClick={handleGraphClick}>
      <Space direction="vertical">
        <div className={styles.graph}>
          <span className={styles.graphtoptest}>
            Backend Technology Usage Graph
          </span>
          <Line {...config} />
          <p className={styles.graphText}>
            By mastering these technologies, you'll be on your way to becoming a
            proficient backend developer.
          </p>
        </div>
      </Space>
    </div>
  );
};

export default BackendGraph;

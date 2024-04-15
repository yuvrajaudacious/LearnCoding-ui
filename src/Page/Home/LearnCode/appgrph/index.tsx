// import styles from "./styles.module.less";
import React from "react";
import { Line } from "@ant-design/charts";
import { Space } from "antd";
import styles from "./styles.module.less";

interface DataItem {
  technology: string;
  popularity: number;
}
interface Props {
  onSelectCourse: () => void;
}

const MobileAppGraph: React.FC<Props> = ({ onSelectCourse }) => {
  const data: DataItem[] = [
    { technology: "React Native", popularity: 40 },
    { technology: "Flutter", popularity: 30 },
    { technology: "Swift", popularity: 15 },
    { technology: "Kotlin", popularity: 10 },
    { technology: "Xamarin", popularity: 5 },
  ];

  const config = {
    data,
    xField: "technology",
    yField: "popularity",
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
            Mobile App Development Technology Popularity Graph
          </span>
          <Line {...config} />
          <p className={styles.graphText}>
            By mastering these technologies, you'll be on your way to becoming a
            proficient mobile app developer.
          </p>
        </div>
      </Space>
    </div>
  );
};

export default MobileAppGraph;

import React from "react";
import { Line } from "@ant-design/charts";
import { Space } from "antd";

interface DataItem {
  technology: string;
  usage: any;
}

interface Props {
  onSelectCourse: () => void;
}

const Graph: React.FC<Props> = ({ onSelectCourse }) => {
  const data: DataItem[] = [
    { technology: "HTML", usage: 16 },
    { technology: "CSS", usage: 15 },
    { technology: "JavaScript", usage: 21 },
    { technology: "ReactJS", usage: 18 },
    { technology: "Bootstrap", usage: 10 },
    { technology: "Git", usage: 5 },
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

  // Event handler to trigger onSelectCourse
  const handleGraphClick = () => {
    // Call onSelectCourse when the graph is clicked
    onSelectCourse();
  };

  return (
    <div onClick={handleGraphClick}>
      <Space direction="vertical">
        <div>
          {/* No need for styles.module.less as it's commented out */}
          <span className="graphtoptest">Front-end Technology Usage Graph</span>
          <Line {...config} />
          <p>
            By mastering these technologies and tools, you'll be on your way to
            becoming a proficient front-end developer.
          </p>
        </div>
      </Space>
    </div>
  );
};

export default Graph;

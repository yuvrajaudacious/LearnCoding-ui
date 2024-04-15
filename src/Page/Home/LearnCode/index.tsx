import React, { useState } from "react";
import { Button, Space, Modal, Checkbox } from "antd";
import styles from "./styles.module.less";
import { ArrowRightOutlined } from "@ant-design/icons";
import Graph from "./frontedgrph";
import Backendgrph from "./backendgrph";
import MobileAppGraph from "./appgrph";
import CourseProgress from "./courseprogress";

interface Options {
  frontend: boolean;
  backend: boolean;
  appDevelopment: boolean;
}

const Learncode: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [options, setOptions] = useState<Options>({
    frontend: false,
    backend: false,
    appDevelopment: false,
  });
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  const handleStartCourse = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
  };

  const handleOptionChange = (option: keyof Options, value: boolean) => {
    setOptions({ ...options, [option]: value });
  };

  const handleCourseSelection = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  return (
    <div>
      <Space>
        <div>
          <h2 className={styles.bigtext}>Learn How to Code</h2>
          <Space>
            <Button
              className={styles.button1}
              type="primary"
              onClick={handleStartCourse}
            >
              Start Course
              <span className={styles.arrowIcon}>
                <ArrowRightOutlined />
              </span>
            </Button>
            <Button className={styles.button2} type="primary">
              Start Practice session
            </Button>
          </Space>
          <div className={styles.miniText}>
            New to coding? Start here and learn programming fundamentals that
            <br />
            can be helpful for any language you learn.
          </div>
          {options.frontend && (
            <Graph
              onSelectCourse={() =>
                handleCourseSelection("Frontend Development")
              }
            />
          )}
          {options.backend && (
            <Backendgrph
              onSelectCourse={() =>
                handleCourseSelection("Backend Development")
              }
            />
          )}
          {options.appDevelopment && (
            <MobileAppGraph
              onSelectCourse={() => handleCourseSelection("App Development")}
            />
          )}
          <CourseProgress courseName={selectedCourse} />
        </div>
      </Space>
      <Modal
        title="Select Course Options"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
      >
        <Checkbox
          checked={options.frontend}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOptionChange("frontend", e.target.checked)
          }
        >
          Frontend Development
        </Checkbox>
        <Checkbox
          checked={options.backend}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOptionChange("backend", e.target.checked)
          }
        >
          Backend Development
        </Checkbox>
        <Checkbox
          checked={options.appDevelopment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleOptionChange("appDevelopment", e.target.checked)
          }
        >
          App Development
        </Checkbox>
      </Modal>
    </div>
  );
};

export default Learncode;

import { Button, Checkbox, Flex, Modal, Space, Typography } from "antd";
import Card from "antd/es/card/Card";
import styles from "./styles.module.less";
import { useEffect, useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "../../../assets/Image/developer.gif";
const Wellcome = () => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textsToType = ["HTML", "JavaScript", "Css", "JAVA"];
  const delayBetweenCharacters = 150;
  const delayBetweenTexts = 2000;
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [options, setOptions] = useState<{
    frontend: boolean;
    backend: boolean;
    appDevelopment: boolean;
  }>({
    frontend: false,
    backend: false,
    appDevelopment: false,
  });

  const handleStartCourse = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
  };

  const handleOptionChange = (option: keyof typeof options, value: boolean) => {
    setOptions({ ...options, [option]: value });
  };

  useEffect(() => {
    let index = 0;
    let interval: number | undefined;

    const typeNextText = () => {
      interval = setInterval(() => {
        if (index < textsToType[currentIndex].length) {
          setTypedText(
            (prevText) => prevText + textsToType[currentIndex].charAt(index)
          );
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            setTypedText("");
            setCurrentIndex(
              (prevIndex) => (prevIndex + 1) % textsToType.length
            );
          }, delayBetweenTexts);
        }
      }, delayBetweenCharacters);
    };

    typeNextText();

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <Space>
        {/* // <Card
          //   className={styles.card}
          //   extra={
          //     <Button
          //       type="text"
          //       shape="circle"
          //       icon={<CloseOutlined onClick={handleClose} />}
          //       onClick={handleClose}
          //     />
          //   }
          // >
          //   <div className={styles.cardtext}>
          //     <h2 className={styles.maintext}>Welcome to LearnCoding</h2>
          //     <h3 className={styles.learntext}>
          //       Learn <span className={styles.typedText}>{typedText}!</span>
          //     </h3>
          //     <h4>
                // We redesigned this dashboard to<br></br> help you stay on track.
                // Easily pick up<br></br> where you left off in courses, <br></br>
                // projects, and workspaces. Check on<br></br> recommendations just
                // for you.
          //     </h4>
          //     <Button
          //       className={styles.button1}
          //       // type="primary"
          //       onClick={handleStartCourse}
          //     >
          //       Start Course
          //       <span className={styles.arrowIcon}>
          //         <ArrowRightOutlined />
          //       </span>
          //     </Button>
          //   </div>
          // </Card> */}
        <Card
          hoverable
          styles={{ width: 900, body: { padding: 0, overflow: "hidden" } }}
        >
          <Flex justify="space-between">
            <Flex
              vertical
              align="flex-end"
              justify="space-between"
              style={{ padding: 32 }}
            >
              <Typography.Title level={3}>
                <h2 className={styles.maintext}>Welcome to LearnCoding</h2>
                <h3 className={styles.learntext}>
                  Learn <span className={styles.typedText}>{typedText}!</span>
                </h3>
                We redesigned this dashboard to<br></br> help you stay on track.
                Easily pick up<br></br> where you left off in courses, <br></br>
                projects, and workspaces. Check on<br></br> recommendations just
                for you.
              </Typography.Title>
              <Button
                className={styles.button1}
                onClick={() => setModalVisible(true)}
              >
                Select Course <ArrowRightOutlined />
              </Button>
            </Flex>
            <img
              alt="avatar"
              src="https://cdn.dribbble.com/users/1708816/screenshots/15637256/media/f9826f0af8a49462f048262a8502035b.gif"
              // style={imgStyle}
              style={{ display: "block", width: "573px" }}
            />
          </Flex>
        </Card>
      </Space>
      <Modal
        title="Select Course Options"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
      >
        <Checkbox
          checked={options.frontend}
          onChange={(e: { target: { checked: boolean } }) =>
            handleOptionChange("frontend", e.target.checked)
          }
        >
          Frontend Development
        </Checkbox>
        <Checkbox
          checked={options.backend}
          onChange={(e: { target: { checked: boolean } }) =>
            handleOptionChange("backend", e.target.checked)
          }
        >
          Backend Development
        </Checkbox>
        <Checkbox
          checked={options.appDevelopment}
          onChange={(e: { target: { checked: boolean } }) =>
            handleOptionChange("appDevelopment", e.target.checked)
          }
        >
          App Development
        </Checkbox>
      </Modal>
    </div>
  );
};

export default Wellcome;

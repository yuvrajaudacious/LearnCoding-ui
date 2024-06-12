import {
  LoginOutlined,
  MoonOutlined,
  SettingFilled,
  WechatWorkOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import React, { useState } from "react";
import Login from "./Auth/Login";
import Layout from "./Layout/Home";
import Chatbot from "./page/ChatBot";

const App: React.FC = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] =
    useState<boolean>(false);
  const [isChatbotVisible, setIsChatbotVisible] = useState<boolean>(false); // State for Chatbot visibility

  const handleLoginButtonClick = () => {
    setIsLoginModalVisible(true);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  const handleChatbotButtonClick = () => {
    setIsChatbotVisible(true);
  };

  const handleCloseChatbot = () => {
    setIsChatbotVisible(false);
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoginModalVisible(true);
  //   }, 10000); // 10 seconds in milliseconds

  //   return () => clearTimeout(timer);
  // }, []); // Empty dependency array to run only once after initial render

  return (
    <div>
      <Layout />
      <FloatButton.Group
        trigger="click"
        style={{ right: 24 }}
        icon={<SettingFilled />}
      >
        <FloatButton icon={<LoginOutlined />} onClick={handleLoginButtonClick}>
          login
        </FloatButton>
        <FloatButton icon={<MoonOutlined />} />
        <FloatButton icon={<SettingFilled />} />
        <FloatButton
          icon={<WechatWorkOutlined />}
          onClick={handleChatbotButtonClick}
        />
      </FloatButton.Group>
      <Login visible={isLoginModalVisible} onClose={handleCloseLoginModal} />
      <Chatbot visible={isChatbotVisible} onClose={handleCloseChatbot} />{" "}
    </div>
  );
};

export default App;

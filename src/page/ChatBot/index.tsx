import { RobotOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Skeleton,
  Typography,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.less";

const { Text } = Typography;

interface ChatbotProps {
  visible: boolean;
  onClose: () => void;
}

interface Message {
  sender: string;
  content: string;
  type?: string;
  time: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ visible, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [showServiceCards, setShowServiceCards] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isContactFormLoading, setIsContactFormLoading] = useState(false);
  const [isServiceCardsLoading, setIsServiceCardsLoading] = useState(false);
  const [contactForm] = Form.useForm();

  const quickReplies = ["Services", "Solutions", "Plane Issue", "Contact"];

  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    } else {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const initialMessage = {
          sender: "bot",
          content: "Hi! 👋 How can I help you today?",
          type: "text",
          time: getCurrentTime(),
        };
        setMessages([initialMessage]);
        localStorage.setItem("chatMessages", JSON.stringify([initialMessage]));
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const sendMessage = (message: string, sender: "user" | "bot") => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender, content: message, type: "text", time: getCurrentTime() },
      ]);

      if (sender === "user") {
        setIsLoading(true);
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "bot",
              content: "Thanks!",
              type: "text",
              time: getCurrentTime(),
            },
          ]);
          setIsLoading(false);
        }, 2000);
      }
    }
  };

  const handleQuickReply = (reply: string) => {
    if (reply === "Contact") {
      setShowContactForm(true);
      setShowServiceCards(false);
      setIsContactFormLoading(true);
      setTimeout(() => {
        setIsContactFormLoading(false);
      }, 2000);
    } else if (reply === "Services") {
      setShowServiceCards(true);
      setShowContactForm(false);
      setIsServiceCardsLoading(true);
      setTimeout(() => {
        setIsServiceCardsLoading(false);
      }, 2000);
    } else {
      sendMessage(reply, "user");
      setShowServiceCards(false);
    }
  };

  const handleSend = () => {
    sendMessage(inputValue, "user");
    setInputValue("");
  };

  const handleContactFormSubmit = async (values: any) => {
    setIsContactFormLoading(true);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("access_key", "25d739c9-22cc-4057-9948-1bbe8a482488");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        message.success({
          content: "Form Submitted Successfully",
          key: "updatable",
          duration: 2,
        });
        sendMessage(
          `Name: ${values.name}, Email: ${values.email}, Message: ${values.message}`,
          "user"
        );
        setShowContactForm(false);
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "bot",
              content: "Thanks, you’ll get a reply here or by email.",
              type: "text",
              time: getCurrentTime(),
            },
          ]);
        }, 1000);
      } else {
        console.log("Error", data);
        message.error({ content: data.message, key: "updatable", duration: 2 });
      }
    } catch (error) {
      console.error("Error:", error);
      message.error({
        content: "An error occurred",
        key: "updatable",
        duration: 2,
      });
    }
    setIsContactFormLoading(false);
  };

  function getCurrentTime() {
    const now = new Date();
    return now.toISOString();
  }

  function formatTime(messageTime: string) {
    const messageDate = new Date(messageTime);
    return messageDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <div className={styles.chatboxss}>
      <Modal
        title={
          <div>
            <Avatar icon={<RobotOutlined />} /> Support ChatBot{" "}
            <Text type="secondary">Online</Text>
          </div>
        }
        visible={visible}
        onCancel={onClose}
        footer={null}
        className={styles.chatbotModal}
      >
        <div className={styles.chatbotMessages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${styles.chatbotMessage} ${
                msg.sender === "user" ? styles.user : styles.bot
              }`}
            >
              <Avatar
                icon={
                  msg.sender === "bot" ? <RobotOutlined /> : <UserOutlined />
                }
              />
              <div className={styles.messageContent}>
                <div>{msg.content}</div>
              </div>
              <div>{formatTime(msg.time)}</div>
            </div>
          ))}
          {isLoading && (
            <div className={styles.skeletonContainer}>
              <Skeleton avatar paragraph={{ rows: 1 }} active />
            </div>
          )}
          {showContactForm && (
            <Card className={styles.card}>
              {isContactFormLoading ? (
                <Skeleton active paragraph={{ rows: 4 }} />
              ) : (
                <Form
                  form={contactForm}
                  layout="vertical"
                  onFinish={handleContactFormSubmit}
                >
                  <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your email",
                        type: "email",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your message",
                      },
                    ]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      className={styles.formbtn}
                      type="primary"
                      htmlType="submit"
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              )}
            </Card>
          )}
          {showServiceCards && (
            <div className={styles.serviceCards}>
              {isServiceCardsLoading ? (
                <Skeleton active paragraph={{ rows: 8 }} />
              ) : (
                <Row gutter={16}>
                  <Col span={12}>
                    <Card title="Web Development" bordered={false}>
                      We offer comprehensive web development services including
                      front-end, back-end, and full-stack development.
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="App Development" bordered={false}>
                      Our app development services cover iOS, Android, and
                      cross-platform solutions to bring your ideas to life.
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="Game Development" bordered={false}>
                      Engage users with high-quality game development services,
                      from concept to deployment.
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card title="Machine Learning" bordered={false}>
                      Leverage our machine learning expertise to build
                      intelligent systems and predictive models.
                    </Card>
                  </Col>
                </Row>
              )}
            </div>
          )}

          <div className={styles.chatbotQuickReplies}>
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                type="primary"
                shape="round"
                size="small"
                onClick={() => handleQuickReply(reply)}
              >
                {reply}
              </Button>
            ))}
          </div>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onPressEnter={handleSend}
            placeholder="Send a message..."
            suffix={<SendOutlined onClick={handleSend} />}
            className={styles.chatbotInput}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Chatbot;

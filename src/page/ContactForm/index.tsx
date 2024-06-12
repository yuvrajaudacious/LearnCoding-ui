import { MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Form, Input, Result, Space, message } from "antd";
import { useEffect, useState } from "react";
import styles from "./styles.module.less";
import { useForm } from "antd/es/form/Form";

export default function Contact() {
  interface ContactForm {
    name: string;
    email: string;
    phone_number: string;
    message: string;
  }
  const [showSuccessCard, setShowSuccessCard] = useState(false);

  const onFinish = async (values: ContactForm) => {
    const [form] = useForm();
    message.loading({ content: "Sending....", key: "updatable" });

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("phone_number", values.phone_number);
    formData.append("access_key", "9305e71b-eb91-4f23-8274-b47122e0785f");

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
        // const form = document.querySelector("form");
        form.resetFields();
        setShowSuccessCard(true);
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
  };
  useEffect(() => {
    if (showSuccessCard) {
      const timeoutId = setTimeout(() => {
        setShowSuccessCard(false);
      }, 1000000);

      return () => clearTimeout(timeoutId);
    }
  }, [showSuccessCard]);
  return (
    <Space>
      <Flex>
        <img
          alt="avatar"
          src="https://avighnaclasses.com/wp-content/uploads/2022/12/81732-contact-us.gif"
        />
        <Flex
          vertical
          align="flex-end"
          justify="space-between"
          style={{ padding: 30 }}
        >
          {showSuccessCard ? (
            <Card className={styles.successcard}>
              <Result
                status="success"
                title="Thank You for your message.it has been send!"
                subTitle="Our LearnCoding Team Contact You."
                extra={[
                  <>
                    <a href="mailto:LearnCoding@gmail.com">
                      LearnCoding@gmail.com
                    </a>
                  </>,
                ]}
              />{" "}
            </Card>
          ) : (
            <Card hoverable title="Contact Form" className={styles.formcard}>
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined />}
                    type="email"
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="phone_number"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input placeholder="Phone Number" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your description",
                    },
                  ]}
                >
                  <Input.TextArea placeholder="Description" />
                </Form.Item>
                <Form.Item>
                  <Button className={styles.btn} htmlType="submit">
                    Send{" "}
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          )}
        </Flex>
      </Flex>
    </Space>
  );
}

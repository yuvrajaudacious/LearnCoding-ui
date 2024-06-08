// Login.tsx

import React from "react";
import { Modal, Form, Input, Button } from "antd";

interface LoginProps {
  visible: boolean;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ visible, onClose }) => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // Handle login logic here
    onClose(); // Close the modal after login
  };

  return (
    <Modal style={{width:30}} title="Login" visible={visible} onCancel={onClose} footer={null}>
      <Form
        name="loginForm"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;

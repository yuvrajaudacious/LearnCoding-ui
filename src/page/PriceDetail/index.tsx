import React from "react";
import { Card, Button, Typography, Row, Col } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./styles.module.less";

const { Title, Text } = Typography;

const plans = [
  {
    title: "Basic",
    price: "₹0",
    description: "Always free",
    features: [
      { name: "Basic access to free courses", included: true },
      { name: "Community support", included: true },
      { name: "Learning resources", included: true },
      { name: "Real-world projects", included: false },
      { name: "All courses", included: false },
      { name: "Skill paths", included: false },
      { name: "Certificates of completion", included: false },
      { name: "Career paths", included: false },
      { name: "Technical interview prep", included: false },
      { name: "Code challenges", included: false },
      { name: "Professional certifications", included: false },
      { name: "Career services", included: false },
      { name: "Assessments", included: false },
    ],
    buttonText: "Get free account",
    isRecommended: false,
  },
  {
    title: "Plus",
    price: "₹300",
    description: "Per month, paid annually",
    subDescription: "or ₹400 paid monthly",
    features: [
      { name: "Everything in Basic and more", included: true },
      { name: "Built-in demand technical skills", included: true },
      { name: "Work on a personal project", included: true },
      { name: "Certificates of completion", included: true },
    ],
    buttonText: "Join Plus",
    isRecommended: false,
  },
  {
    title: "Pro",
    price: "₹600",
    description: "Per month, paid annually",
    subDescription: "or ₹1200 paid monthly",
    features: [
      { name: "Everything in Plus and more", included: true },
      { name: "Develop job skills and experience", included: true },
      { name: "Technical certifications", included: true },
      { name: "Career paths", included: true },
      { name: "Real-world projects", included: true },
    ],
    buttonText: "Join Pro",
    isRecommended: true,
  },
];

const PriceDetail: React.FC = () => {
  return (
    <div className={styles["pricing-container"]}>
      <Title level={2}>Find a plan that fits your goals</Title>
      <Row gutter={[16, 16]} justify="center">
        {plans.map((plan, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              title={plan.title}
              bordered
              className={plan.isRecommended ? styles.recommended : ""}
            >
              <div>
                <Text strong className={styles["pricing-title"]}>
                  {plan.price}
                </Text>
                <Text className={styles["pricing-description"]}>
                  {plan.description}
                </Text>
                {plan.subDescription && (
                  <Text className={styles["pricing-subDescription"]}>
                    {plan.subDescription}
                  </Text>
                )}
              </div>
              <ul className={styles["pricing-features"]}>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={styles["pricing-feature"]}>
                    {feature.included ? (
                      <CheckOutlined className="included" />
                    ) : (
                      <CloseOutlined className="not-included" />
                    )}
                    {feature.name}
                  </li>
                ))}
              </ul>
              <Button
                type={plan.isRecommended ? "primary" : "default"}
                className={styles["pricing-button"]}
              >
                {plan.buttonText}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Text className={styles["pricing-footer"]}>
        <a href="#">View full pricing details</a>
      </Text>
    </div>
  );
};

export default PriceDetail;

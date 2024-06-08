import React from "react";
import { Row, Col, Card, Progress, Divider } from "antd";

const Progresss = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Row gutter={16}>
        <Col span={12}>
          <Card
            title="Attractiveness"
            bordered={false}
            style={{ textAlign: "center" }}
          >
            <Progress type="circle" percent={79.5} format={() => "318 / 400"} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Ability to Execute"
            bordered={false}
            style={{ textAlign: "center" }}
          >
            <Progress type="circle" percent={67.5} format={() => "270 / 400"} />
          </Card>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Market" bordered={false}>
            <Progress percent={93} format={() => "186 / 200"} />
            <Progress percent={42} format={() => "Size"} />
            <Progress percent={47} format={() => "Structure"} />
            <Progress percent={32} format={() => "Disruption"} />
            <Progress percent={42} format={() => "Problem"} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Offer" bordered={false}>
            <Progress percent={66} format={() => "132 / 200"} />
            <Progress percent={42} format={() => "Size"} />
            <Progress percent={47} format={() => "Structure"} />
            <Progress percent={32} format={() => "Disruption"} />
            <Progress percent={32} format={() => "Problem"} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Ownership" bordered={false}>
            <Progress percent={78.5} format={() => "157 / 200"} />
            <Progress percent={42} format={() => "Size"} />
            <Progress percent={47} format={() => "Structure"} />
            <Progress percent={32} format={() => "Disruption"} />
            <Progress percent={47} format={() => "Problem"} />
          </Card>
        </Col>
        <Col span={6}>
          <Card title="Operations" bordered={false}>
            <Progress percent={56.5} format={() => "113 / 200"} />
            <Progress percent={42} format={() => "Size"} />
            <Progress percent={47} format={() => "Structure"} />
            <Progress percent={42} format={() => "Disruption"} />
            <Progress percent={42} format={() => "Problem"} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Progresss;

import { Card, Flex } from "antd";
import React from "react";
import styles from "./styles.module.less";

const Detail: React.FC = () => (
  <Card className={styles.details}>
    <Flex justify="space-between">
      <p className={styles.text}>
        Start with <span className={styles.brandname}> LearnCoding</span> your
        <span className={styles.codetext}> Coding & Computing </span>
        <br></br>
        journey now!
      </p>

      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        // style={{ padding: 32 }}
      >
        <img src="https://miro.medium.com/v2/resize:fit:1136/1*2pORtePzzyTbNXMUQelSCQ.gif"></img>
      </Flex>
    </Flex>
  </Card>
);

export default Detail;

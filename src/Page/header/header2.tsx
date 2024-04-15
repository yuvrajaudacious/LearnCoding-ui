import React from "react";
import { Menu, Tooltip } from "antd";

const Head2: React.FC = () => {
  const programmingLanguages: string[] = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "PYTHON",
    "JAVA",
    "C++",
    "C#",
    "TYPESCRIPT",
    "PHP",
    "REACTJS",
    "NEXTJS",
    "NODEJS",
    "NESTJS",
    "MONOGDB",
    "SQL",
    "ANGULAR",
    "BOOTSTRAP",
    "MYSQL",
    "JQUERY",
    "Scala",
    "Perl",
    "Lua",
    "Haskell",
    "Dart",
    "Objective-C",
    "SQL",
  ];

  return (
    <div>
      <div className="demo-logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ flex: 1, minWidth: 0 }}
      >
        {programmingLanguages.map((language, index) => (
          <Menu.Item key={String(index + 1)} title={language}>
            <Tooltip title={language}>{language}</Tooltip>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default Head2;

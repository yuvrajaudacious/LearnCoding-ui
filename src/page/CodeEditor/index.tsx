import { Layout } from "antd";

const { Header, Content } = Layout;

const CodeEditor: React.FC = () => {
  // const [code, setCode] = useState<string>("");

  // const handleEditorChange = (value: string | undefined) => {
  //   setCode(value || "");
  // };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header style={{ color: "white" }}>My Code Editor</Header>
      <Content style={{ padding: "20px" }}>
        {/* <Editor
          height="90vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          onChange={handleEditorChange}
        /> */}
      </Content>
    </Layout>
  );
};

export default CodeEditor;

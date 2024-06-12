import WebDevelopment from "../../page/AllCourses/WebDevelopement";
import Game from "../../page/CodeGame";
import Contact from "../../page/ContactForm";
import ContactForm from "../../page/ContactForm";
import MyForm from "../../page/ContactForm";
import CoursesSelect from "../../page/CourseSelect";
import Detail from "../../page/Detail";
import DevelopmentCourses from "../../page/DevelopmentCourses/Index";
import SelfDevelopment from "../../page/GuidDetail";
import HeaderComponent from "../../page/Header";
import Progresss from "../../page/Progress";
import styles from "./styles.module.less";

const Layout = () => {
  return (
    <div className={styles.customScrollbar}>
      <HeaderComponent />
      <Detail />
      {/* <ContactForm /> */}
      {/* <Progresss /> */}
      {/* <Game />   */}
      {/* <WebDevelopment /> */}
      <DevelopmentCourses />
      <CoursesSelect />
      <SelfDevelopment />
      <Contact />
    </div>
  );
};

export default Layout;

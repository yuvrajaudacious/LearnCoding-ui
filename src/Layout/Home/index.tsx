import Contact from "../../page/ContactForm";
import CoursesSelect from "../../page/CourseSelect";
import Detail from "../../page/Detail";
import DevelopmentCourses from "../../page/DevelopmentCourses/Index";
import SelfDevelopment from "../../page/GuidDetail";
import HeaderComponent from "../../page/Header";
import styles from "./styles.module.less";

const Layout = () => {
  return (
    <div className={styles.customScrollbar}>
      <HeaderComponent />
      <Detail />
      <DevelopmentCourses />
      <CoursesSelect />
      <SelfDevelopment />
      <Contact />
    </div>
  );
};

export default Layout;

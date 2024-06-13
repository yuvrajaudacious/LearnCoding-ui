import Contact from "../../page/ContactForm";
import CoursesSelect from "../../page/CourseSelect";
import Detail from "../../page/Detail";
import DevelopmentCourses from "../../page/DevelopmentCourses/Index";
import CustomFooter from "../../page/Footer";
import SelfDevelopment from "../../page/GuidDetail";
import HeaderComponent from "../../page/Header";
import PriceDetail from "../../page/PriceDetail";

const Layout = () => {
  return (
    <>
      <HeaderComponent />
      {/* <Chatbots /> */}
      <Detail />
      <DevelopmentCourses />
      <CoursesSelect />
      <SelfDevelopment />
      <Contact />
      <PriceDetail />
      <CustomFooter />
    </>
  );
};

export default Layout;

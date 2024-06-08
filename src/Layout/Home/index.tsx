import WebDevelopment from "../../page/AllCourses/WebDevelopement";
import Game from "../../page/CodeGame";
import CoursesSelect from "../../page/CourseSelect";
import Detail from "../../page/Detail";
import DevelopmentCourses from "../../page/DevelopmentCourses/Index";
import SelfDevelopment from "../../page/GuidDetail";
import HeaderComponent from "../../page/Header";
import Progresss from "../../page/Progress";

const Layout = () => {
  return (
    <div>
      <HeaderComponent />
      <Detail />
      <Progresss />
      {/* <Game />   */}
      <WebDevelopment />
      <DevelopmentCourses />
      <CoursesSelect />
      <SelfDevelopment />
    </div>
  );
};

export default Layout;

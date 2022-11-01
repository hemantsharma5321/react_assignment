import Experience from "../components/Experience";
import Header from "../components/header";
import Hobbies from "../components/Hobbies";
import Skills from "../components/Skills";

const ComponentAssign = () => {
  return (
    <>
      <div className="comcontainer">
        <Header />
        <Experience />
        <Skills />
        <Hobbies />
      </div>
    </>
  );
};
export default ComponentAssign;

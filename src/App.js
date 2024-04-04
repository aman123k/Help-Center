import { useState } from "react";
import Categories from "./component/Categories";
import Header from "./component/Header";
import HeroContainer from "./component/HeroContainer";
import Footer from "./component/Footer";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <section className={` ${menu ? "h-screen overflow-hidden" : ""}`}>
      <Header setMenu={setMenu} menu={menu} />
      <HeroContainer />
      <Categories />
      <hr className=" border-dashed mx-10 border my-20 max-[650px]:my-16" />
      <Footer />
    </section>
  );
}

export default App;

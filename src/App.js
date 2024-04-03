import { useState } from "react";
import Categories from "./component/Categories";
import Header from "./component/Header";
import HeroContainer from "./component/HeroContainer";

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <section className={` ${menu ? "h-screen overflow-hidden" : ""}`}>
      <Header setMenu={setMenu} menu={menu} />
      <HeroContainer />
      <Categories />
    </section>
  );
}

export default App;

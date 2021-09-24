import Carousel from "../../components/Carousal";
import Banners from "../../components/Banners";

import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="carousal-class">
        <Carousel />
      </section>
      <main>
        <Banners />
      </main>
    </div>
  );
}

export default Home;

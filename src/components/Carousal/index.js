import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import "./carousal.css";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [current, setCurrent] = useState(0);
  const length = 5;

  useEffect(() => {
    async function fetchCarousalData() {
      const data = await (await fetch("http://localhost:3001/banners")).json();
      setCarouselData(data);
    }
    fetchCarousalData();
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  const carousel =
    carouselData.length &&
    carouselData.map((slide, index) => (
      <div className={index === current ? "slide active" : "slide"} key={index}>
        {index === current && (
          <img
            src={slide.bannerImageUrl}
            alt={slide.bannerImageAlt}
            className="image"
          />
        )}
      </div>
    ));

  return (
    <div className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {carousel}
    </div>
  );
};
export default Carousel;

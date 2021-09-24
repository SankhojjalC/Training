import { useState, useEffect } from "react";

import "./banners.css";

const Banners = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    async function fetchBannerData() {
      const data = await (
        await fetch("http://localhost:3001/categories")
      ).json();
      setBannerData(data);
    }
    fetchBannerData();
  }, []);

  const renderBanners =
    bannerData.length &&
    bannerData.map((data) => (
      <div className="banners d-flex" key={data.id}>
        <div className="item-flex item-image">
          <img className="product-image" src={data.imageUrl} alt={data.name} />
        </div>
        <div className="item-flex">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
          <button className="btn">{`Explore ${data.key}`}</button>
        </div>
      </div>
    ));

  return <>{renderBanners}</>;
};
export default Banners;

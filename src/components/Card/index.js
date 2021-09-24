import { useState, useEffect, Fragment } from "react";
import { useCart } from "../../hooks/cart";

import "./card.css";

const Card = ({ categoryID, isCategoryClicked }) => {
  const { updateSelectedProductList } = useCart();

  const [productList, setProductList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [isPressed, setPressed] = useState(false);

  const handleClickButton = async (product) => {
    const response = await fetch("http://localhost:3001/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (response.status === 200) updateSelectedProductList(product);
  };

  const filterProductData = (id) => {
    if (id) {
      return dataList.filter((item) => item.category === id);
    } else {
      return dataList;
    }
  };

  useEffect(() => {
    async function fetchProductList() {
      const res = await fetch("http://localhost:3001/product");
      const data = await res.json();
      setProductList(data);
      setDataList(data);
    }
    fetchProductList();
  }, []);

  useEffect(() => {
    if (categoryID && isCategoryClicked) {
      const data = filterProductData(categoryID);
      setProductList(data);
    } else {
      setProductList(dataList);
    }
    // eslint-disable-next-line
  }, [categoryID, isCategoryClicked]);

  return (
    <Fragment>
      <section className="card-row">
        {productList.length ? (
          <>
            {productList.map((product) => (
              <div className="card-outer" key={product.id}>
                <div className="card">
                  <h2>{product.name}</h2>
                  <div className="card-mobile">
                    <figure>
                      <img src={product.imageURL} alt={product.name} />
                    </figure>
                    <div className="card-data-mobile">
                      <div className="card-data">{product.description}</div>
                      <div className="card-footer">
                        <div
                          tabIndex="0"
                          role="button"
                          aria-pressed={isPressed}
                          onClick={(_) => handleClickButton(product)}
                          onKeyDown={(e) => {
                            if (e.key !== "Enter" && e.key !== " ") {
                              return;
                            }
                            setPressed(true);
                          }}
                          onKeyUp={(e) => {
                            if (e.key !== "Enter" && e.key !== " ") {
                              return;
                            }
                            setPressed(false);
                          }}
                          onMouseDown={() => {
                            setPressed(true);
                          }}
                          onMouseUp={() => {
                            setPressed(false);
                          }}
                          className="buynow"
                          style={{ cursor: "pointer" }}
                        >
                          Buy Now
                          <span className="hide-lg">@</span>
                        </div>
                        <span>
                          MRP RS.
                          {parseInt(product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1>No Data</h1>
        )}
      </section>
    </Fragment>
  );
};

export default Card;

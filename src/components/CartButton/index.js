import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/cart";

import { ReactComponent as CartIcon } from "./cart.svg";
import "./index.css";

const CartButton = () => {
  const {
    selectedProductItems,
    handleProductIncrement,
    handleProductDecrement,
  } = useCart();
  const [openCart, setOpenCart] = useState(false);

  const handleAddItem = (data) => {
    handleProductIncrement(data);
  };

  const handleReduceItem = (data) => {
    handleProductDecrement(data);
  };

  const calculatePrice = () => {
    const sum = selectedProductItems.reduce(
      (prev, curr) => prev + parseInt(curr.price) * parseInt(curr.quantity),
      0
    );
    return sum;
  };
  const cartList =
    selectedProductItems.length &&
    selectedProductItems.map((item) => (
      <div className="cart-item" key={item.id}>
        <figure>
          <img src={item.imageURL} alt={item.name} />
        </figure>
        <div className="cart-item-data">
          <h3>{item.name}</h3>
          <div className="item-qty">
            <p>
              <span
                className="item-qty-minus"
                onClick={(_) => handleReduceItem(item)}
              >
                &#8722;
              </span>
              <span>{item.quantity}</span>
              <span
                className="item-qty-plus"
                onClick={(_) => handleAddItem(item)}
              >
                &#43;
              </span>
              <span>&#215;</span>
              <span>{`Rs.${item.price}`}</span>
            </p>
            <p>
              <span>{`Rs.${item.price * item.quantity}`}</span>
            </p>
          </div>
        </div>
      </div>
    ));

  return (
    <main className="header-right">
      <section className={`header-login hide-mobile`}>
        <Link to="/login">SignIn</Link>
        <Link to="/register">Register</Link>
      </section>
      <section className="cart-container">
        <a
          // eslint-disable-next-line
          href="#"
          onClick={() => setOpenCart(!openCart)}
        >
          <CartIcon className="icon" />
          <span>{selectedProductItems?.length}</span>
          <span className="cart-text">items</span>
        </a>
      </section>
      <section className={`modal ${openCart ? "showmodal" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              My Cart <span>{selectedProductItems?.length}</span>
            </h3>
            <a
              // eslint-disable-next-line
              href="#"
              onClick={() => {
                setOpenCart(false);
              }}
            >
              &#10005;
            </a>
          </div>
          <div className="modal-data">
            {selectedProductItems?.length ? (
              <>{cartList}</>
            ) : (
              <>
                <div className="cart-empty">
                  <h3>No items in your cart</h3>
                  <p>Your favourite items are just a click away</p>
                </div>
              </>
            )}

            {selectedProductItems.length ? (
              <div className="cart-ads">
                <figure>
                  <img
                    src="https://w7.pngwing.com/pngs/945/814/png-transparent-low-price-text-sticker-sales-label-promotion-low-price-sticker-text-retail-logo.png"
                    alt="lowest price"
                  />
                </figure>
                <p>You won't find it cheaper anywhere</p>
              </div>
            ) : null}
          </div>
          <div className="modal-footer">
            {selectedProductItems.length ? (
              <>
                <p>Promo code can be applied on payment page</p>
                <button style={{ cursor: "pointer" }}>
                  Proceed to Checkout
                  <span>
                    {`Rs. ${calculatePrice()}`}
                    &#10095;
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  style={{ cursor: "pointer" }}
                  className="cart-empty-button"
                  onClick={() => setOpenCart(!openCart)}
                >
                  Start shopping
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartButton;

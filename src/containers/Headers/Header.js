import { useState } from "react";
import Logo from "../../components/Logo";
import TabComponent from "../../components/Tab";
import Cart from "../../components/CartButton";

import { ReactComponent as Hamburger } from "./hamburger.svg";
import "./index.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <nav>
          <Logo />
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className="hamburger"
          >
            <Hamburger />
          </button>
          <section className={`header-menu`}>
            <TabComponent
              open={open}
              links={[
                { id: 1, text: "Home", url: "/" },
                {
                  id: 2,
                  text: "Products",
                  url: "/products",
                },
                {
                  id: 3,
                  text: "Sign In",
                  url: "/login",
                },
                {
                  id: 4,
                  text: "Register",
                  url: "/register",
                },
              ]}
            />
            <Cart />
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;

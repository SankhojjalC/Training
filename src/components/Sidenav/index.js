import { useState, useEffect } from "react";

import "./sidenav.css";

const Sidenav = ({
  isCategoryClicked,
  setCategoryID,
  setIsCategoryClicked,
}) => {
  const [categoryList, setCategoryList] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("http://localhost:3001/categories");
      const categoriesData = await res.json();
      setCategoryList(categoriesData);
    }
    fetchCategories();
  }, []);

  const renderedList = categoryList.map((category) => (
    <nav
      key={category.id}
      className="nav-item"
      onClick={(_) => {
        setCategoryID(category.id);
        setIsCategoryClicked(!isCategoryClicked);
        setCategoryName(category.name);
        setDisplay(false);
        if (categoryName === category.name) {
          setIsCategoryClicked(!isCategoryClicked);
        }
      }}
    >
      {category.name}
    </nav>
  ));

  return (
    <section className="sidebar">
      <nav className="d-flex flex-coloumn hide-xs">{renderedList}</nav>
      <div className="mobile-sidebar">
        <p onClick={() => setDisplay(!display)}>
          {categoryName.length > 0 ? categoryName : "Select"}
          <span>&or;</span>
        </p>
        <div className={display ? "show-category" : "prod-category"}>
          {renderedList}
        </div>
      </div>
    </section>
  );
};

export default Sidenav;

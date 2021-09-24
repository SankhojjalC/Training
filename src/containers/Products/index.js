import { useState } from "react";
import Card from "../../components/Card";
import Sidenav from "../../components/Sidenav";

import "./products.css";

const Products = () => {
  const [categoryID, setCategoryID] = useState("");
  const [isCategoryClicked, setIsCategoryClicked] = useState(false);
  return (
    <div className="d-flex product-main">
      <aside className="sidenav">
        <Sidenav
          isCategoryClicked={isCategoryClicked}
          setCategoryID={setCategoryID}
          setIsCategoryClicked={setIsCategoryClicked}
        />
      </aside>
      <main className="d-flex flex-wrap pl-4 mt-4">
        <Card isCategoryClicked={isCategoryClicked} categoryID={categoryID} />
      </main>
    </div>
  );
};
export default Products;

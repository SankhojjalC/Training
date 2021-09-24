import { Link } from "react-router-dom";

import styles from "./index.css";

const TabComponent = ({ links, open }) => {
  const renderedLinks = links.map((link) => (
    <Link key={`navigation_${link.id}`} to={link.url} className={styles.link}>
      {link.text}
    </Link>
  ));
  return (
    <div className={`menu ${open ? "open-menu" : ""}`}>{renderedLinks}</div>
  );
};

export default TabComponent;

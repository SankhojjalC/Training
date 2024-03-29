import React from "react";
import Header from "../../containers/Headers";
import Footer from "../../containers/Footers";

// eslint-disable-next-line
export default ({ component: Component, header, footer, ...rest }) => {
  return (
    <div className="content-wrapper">
      {header !== false ? <Header /> : null}

      <Component {...rest} />
      {footer !== false ? <Footer /> : null}
    </div>
  );
};

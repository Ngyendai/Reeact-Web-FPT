import React from "react";
import PropTypes from "prop-types";

const Helmet = props => {
  /* Bước 3*/
  document.title = "Fptshop.com.vn - " + props.title;

  /* Chưa xử lí*/
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Bước 2 */
  return <div>{props.children}</div>;
};

/* Bước 1 */
Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;

import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ isAuth, method }) => {
  const handlerAuth = () => {
    method(!isAuth);
  };

  return <button
    className={`btn btn-${isAuth ? "danger" : "primary"}`}
    onClick={handlerAuth} >
      {isAuth ? "Logout" : "Login"}
    </button>;
};

SimpleComponent.propTypes = {
  isAuth: PropTypes.bool,
  method: PropTypes.func
};

export default SimpleComponent;

import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
  const isLogin = window.localStorage.getItem("auth");
  return (
    <>{
      isLogin
      ? <Component {...props}/>
      : <SmallTitle>Auth</SmallTitle>
    }</>
   );
};

export default withLogin;

import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";
import SimpleComponent from "./simpleComponent";
import CardWrapper from "../common/Card";
import Title from "../common/typografy/title";

const withAuth = (Component) => (props) => {
  const isAuth = JSON.parse(window.localStorage.getItem("user"));
  const [login, setLogin] = useState(isAuth);

  const handleLogin = (loginState) => {
    window.localStorage.setItem("user", !isAuth);
    setLogin(loginState);
  };

  return (
    <CardWrapper>
      <Title> {
        login
          ? "Вы находитесь в системе"
          : "Вы вышли из системы"
      }</Title>
      <SimpleComponent
        isAuth={login}
        method={handleLogin}
      />
    </CardWrapper>
  );
};

const HocExercise = () => {
  const ComponentWithAuth = withAuth(SimpleComponent);
  return (
      <CollapseWrapper title="Упражнение">
          <ComponentWithAuth />
      </CollapseWrapper>
  );
};

export default HocExercise;

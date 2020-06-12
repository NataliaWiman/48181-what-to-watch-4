import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const init = () => {
  const settings = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: `2014`,
  };

  ReactDOM.render(
      <App title={settings.title} genre={settings.genre} date={settings.releaseDate} />,
      document.querySelector(`#root`)
  );
};

init();

export default init;

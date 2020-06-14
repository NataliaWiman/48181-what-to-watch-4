import React from "react";
import Main from "../main/main.jsx";

// eslint-disable-next-line react/prop-types
const App = ({title, genre, date, titlesList}) => {

  return <Main title={title} genre={genre} date={date} titlesList={titlesList} />;
};

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const menu = [
    {
      label: "Produtos",
    },
    {
      label: "Contatos",
    },
  ];

  return (
    <div>
      <Header menu={menu} />
    </div>
  );
}

export default App;

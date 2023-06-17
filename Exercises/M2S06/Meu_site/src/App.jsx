import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

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
      <Banner />
    </div>
  );
}

export default App;

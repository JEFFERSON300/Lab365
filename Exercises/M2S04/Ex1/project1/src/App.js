import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer name1={"Desenvolvedor"} name2={"Termos"} name3={"Privacidade"} />
    </div>
  );
}

export default App;

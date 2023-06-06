import "./styles/App.css";
import googleLogo from "./images/googlelogo.png";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <Header />
      <img className="app-logo" src={googleLogo} alt="" />
      <Input prop1="Pesquise no Google ou digite um URL" />
      <Button prop1="Pesquisa Google" prop2={25} prop3={true} />
      <Button prop1="Estou com sorte" prop2={30} prop3={false} />
    </div>
  );
}

export default App;

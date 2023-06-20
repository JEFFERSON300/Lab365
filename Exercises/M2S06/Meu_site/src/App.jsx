import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
  const menu = [
    {
      label: "Produtos",
    },
    {
      label: "Contatos",
    },
  ];

  const products = [
    {
      id: 1,
      imagePath: "a.jpg",
      product: "prod1",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo.",
      characteristics: ["a", "b", "c", "d"],
    },
    {
      id: 2,
      imagePath: "./",
      product: "prod2",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo.",
      characteristics: ["a", "b", "c"],
    },
    {
      id: 3,
      imagePath: "./",
      product: "prod3",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é.Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.In elementis mé pra quem é amistosis quis leo.",
      characteristics: ["a", "b"],
    },
  ];

  return (
    <div>
      <Header menu={menu} />
      <Banner />
      <Products allProducts={products} />
      <Footer />
    </div>
  );
}

export default App;

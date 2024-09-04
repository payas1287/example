import Product from "./components/products/Product"
import Header from "./components/header/Header"
import "./App.scss";
import {categories, products} from "./helper/data"

function App() {
  return <div className="App">
    <Header categorieS={categories} />
    <Product products= {products} />
  </div>;
}

export default App;

import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import data from "./db/data";

function App() {
  return (
    <>
      <ProductList inventory={data} />
      <Footer />
    </>
  )
}

export default App

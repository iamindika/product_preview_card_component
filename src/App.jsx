import ProductList from "./components/ProductList";
import data from "./db/data";

function App() {
  return (
    <>
      <ProductList inventory={data} />
    </>
  )
}

export default App

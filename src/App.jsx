import ProductList from "./components/ProductList";
import data from "./db/data";

function App() {
  return (
    <main>
      <ProductList inventory={data} />
    </main>
  )
}

export default App

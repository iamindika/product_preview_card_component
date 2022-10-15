import data from "./db/data";

function App() {
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default App

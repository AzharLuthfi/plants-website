import Navbar from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/PlantsCatalog";
function App() {
  return (
    <>
      <Navbar />
      {/* section lain */}
      <Home />
      <About />
      <Product />
    </>
  );
}

export default App;

import Navbar from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/PlantsCatalog";
import Benefits from "./components/Benefits";
import PlantCare from "./components/PlantCare";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* section lain */}
      <main>
        <Home />
        <About />
        <Product />
        <Benefits />
        <PlantCare />
        <Review />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

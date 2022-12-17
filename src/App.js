import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import Navbar2 from "../src/components/Navbar2/Navbar2";
import Hero from "../src/components/Hero/Hero";
import Carousel from "./components/Carousel/Carousel";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import Cards from "./components/Cards/Cards";
import MapSection from "./components/Map/MapSection";
import Annoucement from "./components/Annoucement/Annoucement";
import Rate from "./components/Rate/Rate";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <Hero />
      <Carousel />
      <WelcomeSection />
      <Cards />
      <MapSection />
      <Annoucement />
      <Rate />
      <Footer />
    </div>
  );
}

export default App;

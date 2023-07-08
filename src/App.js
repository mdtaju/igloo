import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;

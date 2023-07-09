import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";
import Home from "./pages/Home";

let timeout;
let scroll = 0;

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        if (document.querySelector("#header")) {
          if (scroll >= window.scrollY || window.scrollY < 100) {
            document.querySelector("#header").classList.add("sticky");
          } else {
            document.querySelector("#header").classList.remove("sticky");
          }
        }
        if (window.scrollY > 400) {
          document.querySelector("#upNavigate").classList.add("visible");
          document.querySelector("#upNavigate").classList.remove("invisible");
        } else {
          document.querySelector("#upNavigate").classList.add("invisible");
          document.querySelector("#upNavigate").classList.remove("visible");
        }
        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "src/App";
import { register } from "swiper/element/bundle";

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);

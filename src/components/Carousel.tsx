import { carousel1, carousel2 } from "@/assets";
import { useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

import "./styles/carousel.css";

const images = [
  {
    src: carousel1,
    alt: "Project Launch Evening",
  },
  {
    src: carousel2,
    alt: "BESA x Project Magma x CAAH Case Competition",
  },
];

export default function Carrossel() {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <>
      <div className="carousel">
        <div className="carousel-left">
          <button
            onClick={() =>
              setCurrentIdx((idx) => (idx - 1 + images.length) % images.length)
            }
            className="carousel-button"
          >
            <IoArrowBackCircleOutline />
          </button>
        </div>
        <img
          src={images[currentIdx].src}
          alt={images[currentIdx].alt}
          className="carousel-image"
        />
        <div className="carousel-right">
          <button
            onClick={() => setCurrentIdx((idx) => (idx + 1) % images.length)}
            className="carousel-button"
          >
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
      <div className="carousel-caption">
        <h2 style={{ textAlign: "center" }}>{images[currentIdx].alt}</h2>
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot${idx === currentIdx ? " active" : ""}`}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

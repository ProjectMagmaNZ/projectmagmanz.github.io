import { carousel1, carousel2 } from "@/assets";
import { useEffect, useState } from "react";
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
    alt: "Case Competition",
  },
];

export default function Carrossel() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayIdx, setDisplayIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState(images[0].src);

  useEffect(() => {
    const img = new Image();
    img.src = images[currentIdx].src;
    setLoaded(false);
    img.onload = () => {
      setDisplayIdx(currentIdx);
      setTimeout(() => {
        setSrc(images[currentIdx].src);
        setLoaded(true);
      }, 300);
    };
  }, [currentIdx]);

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
        <div className="carousel-container">
          <img
            src={src}
            className={`carousel-image ${loaded ? "active" : ""}`}
            onLoad={() => setLoaded(true)}
          />
        </div>
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
        <h2 style={{ textAlign: "center" }}>{images[displayIdx].alt}</h2>
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot${idx === displayIdx ? " active" : ""}`}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

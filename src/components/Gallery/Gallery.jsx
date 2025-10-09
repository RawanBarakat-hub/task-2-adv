
import { useState, useRef, useEffect } from "react";
import styles from "./Gallery.module.css";
import Arrows from "../Arrows/Arrows";

const Gallery = ({ images, title, description }) => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    window.innerWidth <= 992 ? 1 : 4
  );
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth <= 992 ? 1 : 4);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = images.length;

  const handleNext = () => {
    setCurrent((prev) => (prev >= total - visibleCount ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev <= 0 ? total - visibleCount : prev - 1));
  };

  useEffect(() => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards.length < 2) return;

    const firstRect = cards[0].getBoundingClientRect();
    const secondRect = cards[1].getBoundingClientRect();
    const cardWidth = secondRect.left - firstRect.left;
    const moveX = current * cardWidth;
    sliderRef.current.style.transform = `translateX(-${moveX}px)`;
  }, [current, visibleCount]);

  return (
    <div className={`${styles.gallery} card_style`}>
      <div className={styles.images_wrapper}>
        <div className={styles.slider} ref={sliderRef}>
          {images?.map((image, index) => (
            <div key={index} className={styles.image}>
              <img className={styles.photo} src={image} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
      <Arrows
        title={title}
        description={description}
        handleLeft={handleNext}
        handleRight={handlePrev}
        variant="gallery"
      />
    </div>
  );
};

export default Gallery;

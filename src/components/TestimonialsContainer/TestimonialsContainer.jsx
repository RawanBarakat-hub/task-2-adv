import { useState, useRef, useEffect } from "react";
import styles from "./TestimonialsContainer.module.css";

const TestimonialsContainer = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const total = children.length;
  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) setVisibleCount(1);
      else setVisibleCount(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= total - visibleCount ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? total - visibleCount : prev - 1
    );
  };
  useEffect(() => {
    if (!sliderRef.current || total === 0) return;

    const updateSlidePosition = () => {
      const cards = sliderRef.current.children;
      if (cards.length < 2) return;

      const firstRect = cards[0].getBoundingClientRect();
      const secondRect = cards[1].getBoundingClientRect();
      const cardWidth = secondRect.left - firstRect.left;

      const maxIndex = total - visibleCount;
      const safeIndex = Math.min(currentIndex, Math.max(maxIndex, 0));
      const moveX = safeIndex * cardWidth;
      sliderRef.current.style.transform = `translateX(-${moveX}px)`;
    };

  updateSlidePosition();
  window.addEventListener("resize", updateSlidePosition);
  return () => window.removeEventListener("resize", updateSlidePosition);
}, [currentIndex, total, visibleCount]);
  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider} ref={sliderRef}>
          {children}
        </div>
      </div>
      <div className={styles.arrows}>
        <button onClick={nextSlide}>
          <img src="/assets/img/icons/arrow-left.svg" alt="arrow-left" />
        </button>
        <button onClick={prevSlide}>
          <img src="/assets/img/icons/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsContainer;

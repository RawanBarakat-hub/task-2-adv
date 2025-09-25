import { useState } from "react";
import styles from "./TestimonialsContainer.module.css";

const TestimonialsContainer = ({ children }) => {
  const items = (Array.isArray(children) ? children : [children]).filter(Boolean);
  const perView = typeof window !== "undefined" && window.innerWidth <= 992 ? 1 : 3;

  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, items.length - perView);

  const next = () => setIndex(i => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex(i => (i === 0 ? maxIndex : i - 1));

  const offsetPercent = (index * 100) / perView;

  return (
    <div className={styles.container} style={{ ["--perView"]: perView }}>
      <div className={styles.slider} style={{ transform: `translateX(-${offsetPercent}%)` }}>
        {items}
      </div>

      <div className={styles.arrows}>
        <button onClick={next}>
          <img src="/assets/img/icons/arrow-left.svg" alt="arrow-left" />
        </button>
        <button onClick={prev}>
          <img src="/assets/img/icons/arrow-right.svg" alt="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsContainer;

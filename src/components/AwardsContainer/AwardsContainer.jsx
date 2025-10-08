import { Children, cloneElement, useState, useRef, useEffect } from "react";
import Arrows from "../Arrows/Arrows";
import styles from "./AwardsContainer.module.css";

const AwardsContainer = ({ children, title, description }) => {
    const total = children.length;
    const [current, setCurrent] = useState(0);
    const sliderRef = useRef(null);
    const [visibleCount, setVisibleCount] = useState(window.innerWidth <= 992 ? 1 : 3);

    useEffect(() => {
    const handleResize = () => {
        setVisibleCount(window.innerWidth <= 992 ? 1 : 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNext = () => {
    setCurrent((prev) => (prev >= total - visibleCount ? 0 : prev + 1));
    };

    const handlePrev = () => {
    setCurrent((prev) => (prev <= 0 ? total - visibleCount : prev - 1));
    };
    useEffect(() => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.children[0];
    if (!card) return;

    const cardStyles = getComputedStyle(card);
    const cardWidth = card.getBoundingClientRect().width;
    const marginLeft = parseFloat(cardStyles.marginLeft) || 0;
    const marginRight = parseFloat(cardStyles.marginRight) || 0;
    const gap = parseFloat(getComputedStyle(sliderRef.current).gap) || 0;

    const moveX = current * (cardWidth + marginLeft + marginRight + gap);
    sliderRef.current.style.transform = `translateX(-${moveX}px)`;
    }, [current]);

    return (
        <div className={styles.slider}>
        <div className={styles.window}>
            <div className={styles.container_three} ref={sliderRef}>
            {Children.map(children, (child) => cloneElement(child))}
            </div>
        </div>
        <Arrows
            title={`${total} ${title}`}
            description={description}
            handleLeft={handleNext}
            handleRight={handlePrev}
        />
        </div>
    );
};

export default AwardsContainer;

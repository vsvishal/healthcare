import { useEffect, useRef, useState } from "react";
import CarouselIndicators from "./CarouselIndicators";
import "./Carousel.css";

const Carousel = ({ images, interval = 2000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let timer = useRef(null);

  useEffect(() => {
    timer = setInterval(nextSlide, interval);
    return () => {
      clearInterval(timer);
    };
  }, [interval]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  // ...
  return (
    <div className="carousel w-[70%] h-[40rem] mx-auto my-8">
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img object-fill"
      />
      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button>
      <CarouselIndicators
        images={images}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
    </div>
  );
};
export default Carousel;

// import React, { useEffect, useRef, useState } from "react";
// import { leftArrow, rightArrow } from "..";

// interface CarouselProps {
//   images: string[];
// }

// const Carousel = ({ images }: CarouselProps) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   let timer = useRef(null);

//   useEffect(() => {
//     timer = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 2000);

//     return () => {
//       if (timer) {
//         clearInterval(timer);
//       }
//     };
//   }, [activeIndex, images.length, timer]);

//   const handleNextClick = () => {
//     setActiveIndex((activeIndex + 1) % images.length);
//   };

//   const handlePreviousClick = () => {
//     setActiveIndex(!activeIndex ? images.length - 1 : activeIndex - 1);
//   };

//   return (
//     <div className="relativ mx-auto border-none p-1">
//       <button className="" onClick={handlePreviousClick}>
//         <img src={leftArrow} alt="right-arrow" className="h-8 w-6 " />
//       </button>

//       {images.map((url, i) => (
//         <img
//           key={i}
//           src={url}
//           alt={`slide${i}`}
//           className=""
//           style={{
//             display: activeIndex === i ? "block" : "none",
//           }}
//         />
//       ))}

//       <button className="" onClick={handleNextClick}>
//         <img src={rightArrow} alt="left-arrwo" className="h-8 w-6" />
//       </button>
//     </div>
//   );
// };

// export default Carousel;

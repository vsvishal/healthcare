import React, { useEffect, useRef, useState } from "react";
import { leftArrow, rightArrow } from "..";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let timer = useRef(null);

  useEffect(() => {
    timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [activeIndex, images.length, timer]);

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handlePreviousClick = () => {
    setActiveIndex(!activeIndex ? images.length - 1 : activeIndex - 1);
  };

  return (
    <div className="relativ mx-auto border-none p-1">
      {images.map((url, i) => (
        <img
          key={i}
          src={url}
          alt={`slide${i}`}
          className="w-full h-[40rem] object-center"
          style={{
            display: activeIndex === i ? "block" : "none",
          }}
        />
      ))}
      <button
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-[rgba(228,233,237,0.6)] px-4 py-2  rounded-md z-10 hover:bg-gray-400"
        onClick={handlePreviousClick}
      >
        <img src={leftArrow} alt="right-arrow" className="h-8 w-6 " />
      </button>
      <button
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-[rgba(228,233,237,0.6)] px-4 py-2 rounded-md z-10 hover:bg-gray-400"
        onClick={handleNextClick}
      >
        <img src={rightArrow} alt="left-arrwo" className="h-8 w-6" />
      </button>
    </div>
  );
};

export default Carousel;

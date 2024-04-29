import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Image {
  images: string[];
}

interface Props {
  className: string;
  style: string;
  onClick: () => void;
}

function SampleNextArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: {
  className?: any;
  style?: any;
  onClick?: any;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SlickCarousel({ images }: Image) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container mx-auto w-[70%] my-10">
      <Slider {...settings}>
        {images.map((image: string, i: number) => (
          <div>
            <img
              src={image}
              key={i}
              className="w-full h-[20rem] md:h-[32rem] transition duration-300 hover:scale-105"
              alt="slider-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlickCarousel;

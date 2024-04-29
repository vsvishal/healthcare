import Card from "./components/Card/Card";
import SlickCarousel from "./components/Carousel/SlickCarousel";
import Header from "./components/Header/Header";
import VisionMission from "./components/VisionMission/VisionMission";
import { cardData } from "./helper/cardData";
import {
  Footer,
  zeviD3,
  zevicuf,
  zevicufls,
  zevifit,
  zevifitAd,
  zevipan,
  zevivert,
} from "./components/index";

function App() {
  const images = [
    zeviD3,
    zevicuf,
    zevicufls,
    zevifit,
    zevifitAd,
    zevipan,
    zevivert,
  ];

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 m-4 md:m-10">
        {cardData.map((card) => (
          <Card title={card.title} description={card.description} />
        ))}
      </div>
      <VisionMission />
      <SlickCarousel images={images} />
      <Footer />
    </>
  );
}

export default App;

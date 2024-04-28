import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import {
  zeviD3,
  zevicet,
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
      <Carousel images={images} />
    </>
  );
}

export default App;

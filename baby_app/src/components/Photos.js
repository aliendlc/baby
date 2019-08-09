import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


import Orange from "../babyPhotos/orange.jpg";
import Cucumber from "../babyPhotos/cucumber.jpg";
import Pear from "../babyPhotos/babyPear.jpg";
import Avocado from "../babyPhotos/avocado.jpg";
import Onion from "../babyPhotos/onion.jpg";
import Mango from "../babyPhotos/mango.jpg";
import Banana from "../babyPhotos/banana.jpg";

// import Image2 from "./assets/2.jpg";
// import Image3 from "./assets/3.jpg";

const Photos = () => (
  <div
    className="photosBox"
  >
    <Carousel arrows infinite>
      <img className="photos" src={Orange} />
      <img className="photos" src={Cucumber} />
      <img className="photos" src={Pear} />
      <img className="photos" src={Avocado} />
      <img className="photos" src={Onion} />
      <img className="photos" src={Mango} />
      <img className="photos" src={Banana} />
    </Carousel>
  </div>
);

export default Photos;

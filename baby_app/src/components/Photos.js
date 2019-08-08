import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Image1 from "../babyPhotos/babyPear.jpg";
// import Image2 from "./assets/2.jpg";
// import Image3 from "./assets/3.jpg";

const Photos = () => (
  <div
    className="App"
    style={{ width: "600px", margin: "auto", padding: "50px" }}
  >
    <Carousel arrows infinite>
      <img src={Image1} />
    </Carousel>
  </div>
);

export default Photos;

/** @format */

// export default withTranslation()(Carousels)
/** @format */

import React from "react";
import "./styles.css";
// import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";
import { withTranslation } from "react-i18next";
import img1 from "../../assets/images/caro_1.png";
import img2 from "../../assets/images/caro_2.png";
import img3 from "../../assets/images/caro_3.png";
import img4 from "../../assets/images/caro_4.png";
import img5 from "../../assets/images/caro_5.png";

import img6 from "../../assets/images/caro_6.png";
import img7 from "../../assets/images/caro_7.png";
import img8 from "../../assets/images/caro_8.png";
import img9 from "../../assets/images/caro_9.png";
import img10 from "../../assets/images/caro_10.png";
import img11 from "../../assets/images/caro_11.png";
import img12 from "../../assets/images/caro_12.png";
import { Carousel } from "@trendyol-js/react-carousel";

function Carousels(props) {
  const { t } = props;
  return (
    <div className="container-carousel" id="industries">
      <p className="carousel-title">
        Providing Access & Solutions to Multiple Industries
      </p>
      <div className="squad_3"></div>
      <div className="squad_4"></div>

      <Carousel
        show={5}
        slide={1}
        transition={0.5}
        className="Carousel-content"
      >
        <div className="card-image-carousel">
          <img className="img-carousel" src={img1} />
          <p className="text">Gameming</p>
        </div>
        <div className="card-image-carousel">
          <img className="img-carousel" src={img2} />
          <p className="text">Financial Service</p>
        </div>
        <div className="card-image-carousel">
          <img className="img-carousel" src={img3} />
          <p className="text">Transportation</p>
        </div>
        <div className="card-image-carousel">
          <img className="img-carousel" src={img4} />
          <p className="text">Telecommunication</p>
        </div>
        <div className="card-image-carousel">
          <img className="img-carousel" src={img5} />
          <p className="text">Transportation</p>
        </div>
        <div className="card-image-carousel">
          <img className="img-carousel" src={img6} />
          <p className="text">Gameming</p>
        </div>
        <div className="card-image-carousel">
          <img className="img-carousel" src={img7} />
          <p className="text">Financial Service</p>
        </div>

        <div className="card-image-carousel">
          <img className="img-carousel" src={img8} />
          <p className="text">Transportation</p>
        </div>

        <div className="card-image-carousel">
          <img className="img-carousel" src={img9} />
          <p className="text">Telecommunication</p>
        </div>

        <div className="card-image-carousel">
          <img className="img-carousel" src={img10} />
          <p className="text">Telecommunication</p>
        </div>

        <div className="card-image-carousel">
          <img className="img-carousel" src={img11} />
          <p className="text">Telecommunication</p>
        </div>

        <div className="card-image-carousel">
          <img className="img-carousel" src={img12} />
          <p className="text">Telecommunication</p>
        </div>
      </Carousel>
    </div>
  );
}

export default withTranslation()(Carousels);

/** @format */

import {
  HeaderCom,
  FooterCom,
  CaseCardCom,
  ServiceCardCom,
  CarouselsCom,
  Contact,
} from "../../components";
import { Button, Row } from "antd";

import "./styles.css";

import casestudy_2 from "../../assets/images/case_study_1.png";

import casestudy_1 from "../../assets/images/case_study_2.png";
import casestudy_3 from "../../assets/images/case_study_3.png";
import mambologo from "../../assets/images/Mambu.png";
import perxlogo from "../../assets/images/per_x.png";
import amitylogo from "../../assets/images/Amity.png";

import useroctagon from "../../assets/images/user-octagon.png";
import setting2 from "../../assets/images/setting-2.png";
import monitormobbile from "../../assets/images/monitor-mobbile.png";
import email from "../../assets/images/sms-tracking.png";
import phone from "../../assets/images/Vector.png";

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
import bannerimage from "../../assets/images/hero.png";
import { Carousel } from "@trendyol-js/react-carousel";
import {
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const Home = () => {
  const dummyCaseCard = [
    {
      imageUrl: casestudy_1,
      title: "Next Generation SaaS Cloud Banking",
      description:
        "Innovative Vietnamese digital bank Cake selected Mambu as its new technology foundation to enable rapid growth as it evolves into a full service digital bank.",
    },
    {
      imageUrl: casestudy_2,
      title: "Building Scaleable Social Activations",
      description:
        "TrueID uses social and chat features to transform its media app into a lifestyle and entertainment hub and powers real-time interactions on streaming channels boosting engagement, retention, and monetization opportunities.",
    },
    {
      imageUrl: casestudy_3,
      title: "Gamified Marketing That Performs",
      description:
        "Hoolah Chooses Perx Technologies To Dynamically Engage Millions of Buy Now Pay Later customers",
    },
  ];

  return (
    <>
      {/* Banner */}
      <div className="container-banner">
        <p className="banner-title">
          Technology Frontier of Innovative Solutions
        </p>
        <button className="banner-button">
          <h2>Learn More</h2>
        </button>
        <img src={bannerimage} className="image-hero"></img>
      </div>

      {/* Partner */}
      <div className="container-partner">
        <div className="partner-title">Global Partners</div>
        <div className="partner-logo">
          <img src={mambologo} className="partner-logo_item_1" />
          <img src={perxlogo} className="partner-logo_item_2" />
          <img src={amitylogo} className="partner-logo_item_3" />
        </div>
      </div>

      {/* Slogan */}
      <div className="slogan">
        <div className="slogan-ornaments">
          <div className="slogan-retangle_1"></div>
          <div className="slogan-retangle_2"></div>
        </div>
        <div className="slogan-seperator"></div>
        <div className="slogan-description">
          <div className="slogan-description_1">This is</div>
          <div className="slogan-description_2">
            Tech<span>FIS</span>
          </div>
          <p className="slogan-description_3">
            Our mission is to be the Technology Frontier of Innovation Solutions
            in collaboration with global leaders in SaaS and Enterprise Software
            to bring disruptive technologies to emerging markets through
            strategic partnerships, integrations and new business opportunities.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="service" id="_service">
        <div className="service-title">
          <h2>Services</h2>
        </div>
        <div className="service-ornaments">
          <div className="service-retangle_1"></div>
          <div className="service-retangle_2"></div>
        </div>
        <div className="service-retangle">
          <div className="service-retangle_3"></div>
        </div>
        <div className="service-card_wrapper">
          <ServiceCardCom
            icon={
              useroctagon
            }
            title="Fast Tracked Go-To-Market Development"
            description="We successfully connect our innovative partners to local markets, leveraging our extensive network with local businesses in multiple industries."
          />
          <ServiceCardCom
            icon={
              setting2
            }
            title="Custom Onboarding Integrations"
            description="Our team of world-class technical experts can assist or facilitate new technical integrations of different SaaS and enterprise solutions, regardless of the complexity."
          />
          <ServiceCardCom
            icon={
              monitormobbile
            }
            title="Full-stack Product Development"
            description="If you dream it, we can build it. Our skilled team of technical experts can build and customize world-class solutions for any start-up, enterprise or tech innovator."
            isNew={true}
          />
        </div>
      </div>

      {/* CaseCard */}
      <div className="studies-case">
        <div className="squad_1"></div>
        <div className="squad_2"></div>
        <p className="case-title">Case Studies</p>
        <p className="case-description">
          With each client we see boundless growth, endless opportunity for tech
          integrations and so much more.
        </p>
        <div className="container-card_1">
          <CaseCardCom
            imageUrl={casestudy_1}
            title="Next Generation SaaS Cloud Banking"
            description="Innovative Vietnamese digital bank Cake selected Mambu as its new technology foundation to enable rapid growth as it evolves into a full service digital bank."
          />
        </div>
        <div className="container-card_2">
          <CaseCardCom
            imageUrl={casestudy_2}
            title="Building Scaleable Social Activations"
            description="TrueID uses social and chat features to transform its media app into a lifestyle and entertainment hub and powers real-time interactions on streaming channels boosting engagement, retention, and monetization opportunities."
          />
        </div>

        <div className="container-card_3">
          <CaseCardCom
            imageUrl={casestudy_3}
            title="Gamified Marketing That Performs"
            description="Hoolah Chooses Perx Technologies To Dynamically Engage Millions of Buy Now Pay Later customers"
          />
        </div>
      </div>

      {/* Carousel */}
      <div className="container-carousel" id="industries">
        <p className="carousel-title">
          Providing Access & Solutions to Multiple Industries
        </p>
        <div className="squad_3"></div>
        <div className="squad_4"></div>

        <div className="carousel-media">

          <Carousel
            show={4.7}
            slide={2}
            transition={0.5}

          // className="Carousel-content"

          >
            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img1}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Gameming</p>
            </div>
            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img2}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Financial Service</p>
            </div>
            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img3}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Transportation</p>
            </div>
            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img4}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Telecommunication</p>
            </div>
            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img5}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Transportation</p>
            </div>
            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img6}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Gaming</p>
            </div>
            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img7}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Financial Service</p>
            </div>

            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img8}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Transportation</p>
            </div>

            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img9}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Telecommunication</p>
            </div>

            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img10}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Telecommunication</p>
            </div>

            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img11}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Telecommunication</p>
            </div>

            <div className="card-image-carousel">
              <img
                className="img-carousel"
                src={img12}
                style={{ width: "18.22vw", height: "18.22vw" }}
              />
              <p className="text-carousel-media">Telecommunication</p>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Contact */}
      <div className="container-contact" id="contact">
        <div class="squad_5"></div>
        <div class="squad_6"></div>
        <div class="squad_7"></div>
        <p className="contact-title">
          Interested in working together? Let’s get in touch.
        </p>

        <button class="buttoncontact_1 button_circle_form">
          <img src={email} className="contact_icon" />
        </button>

        <p className="text-email-title">Email</p>
        <p className="text-email-description">info@techfis.com</p>

        <button class="buttoncontact_2 button_circle_form">
          <img src={phone} className="contact_icon" />
        </button>

        <p className="text-phone-title">Phone</p>
        <p className="text-phone-description">+84 24 3926 4083</p>

        <div className="container-form">
          <p className="contact-title-form">We are happy to answers</p>
          <p className="contact-label-name">Your Name</p>
          <input type="text" id="name" name="name" className="input_yourname" />
          <p className="contact-label-email">Email Address</p>
          <input type="text" id="name" name="name" className="input_email" />
          <p className="contact-label-message">Message</p>
          <input type="text" id="name" name="name" className="input_message" />

          <Button shape="round" className="button-send">
            Send Message
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;

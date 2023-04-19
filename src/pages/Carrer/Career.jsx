/** @format */

import { HeaderCom, FooterCom } from "../../components";
import "./styles.css";
import {
  LayoutOutlined,
  GlobalOutlined,
  LikeOutlined,
  SmileOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import imagebackground from "../../assets/images/Thumbnail.png";

import { MailOutlined } from "@ant-design/icons";
import imgready from "../../assets/images/image-part.png";
import imagebackground_mobile from "../../assets/images/Thumbnail-mobile.png";
const Career = () => {
  return (
    <>
      {/* <div className="container-career"> */}

      <div className="squad_career_5"></div>
      <div className="squad_career_6"></div>
      <div className="line-career"></div>

      {/* Our Team */}

      {/* our Team top */}
      <div className="ourteam-top" id="main_career">
        <p className="ourteam-title">Our Team</p>
        <p className="ourteam-description">
          Our company is a young and dynamic company with a start-up environment
          that is always looking for qualified talent to join the team. Work
          closely with the country's most talented product developers and
          engineers on exciting new opportunities from our growing list of
          global partners.
        </p>
        <img src={imagebackground} className="image-background"></img>
        <img
          src={imagebackground_mobile}
          className="image-background-mobile"
        ></img>
      </div>

      {/* our Team bottom */}
      <div className="ourteam-bottom">
        {/* <div className="squad_career_4"></div> */}
        <div className="squad_career_2"></div>
        <div className="squad_career_1"></div>
        <div className="squad_career_3"></div>
        <p className="ourteam-work">Work-Life Highlights</p>
        <p className="ourteam-work-description">
          Join a team of world-class professionals who are driven to build and
          connect today's most advanced technological products and enterprise
          solutions.
        </p>

        <div className="card-ourteam_1">
          <div class="div_circle">
            <GlobalOutlined className="icon" />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam_2">
          <div class="div_circle">
            <LikeOutlined className="icon" />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam_3">
          <div class="div_circle">
            <TrophyOutlined className="icon" />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam_4">
          <div class="div_circle">
            <LayoutOutlined className="icon" />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam_5">
          <div class="div_circle">
            <SmileOutlined className="icon" />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
      </div>

      {/* Opportunities */}

      <div className="container-opportunities">
        <div className="content-opportunities">
          <p className="opportunities-title">Carrer Opportunities</p>
          <p className="opportunities-description">
            Interest in working together? We'd love to hear from you
          </p>
        </div>

        <div className="Opptop">
          <div className="container-oppcard_1">
            <p className="oppCard-text-mobile_1">Dev Ops Engineer</p>
            <p className="oppCard-text-mobile_2">
              Full-time Santa Maria, California
            </p>
            <p className="oppCard-text">
              Dev Ops Engineer • Full-time • Santa Maria, California
            </p>
            <button className="see-detail">
              <p className="see-text">SEE DETAILS</p>
            </button>
          </div>
          <div className="container-oppcard_2">
            <p className="oppCard-text-mobile_1">Head of Growth</p>
            <p className="oppCard-text-mobile_2">
              Full-time Santa Maria, California
            </p>
            <p className="oppCard-text">
              Head of Growth • Full-time • Santa Maria, California
            </p>
            <button className="see-detail">
              <p className="see-text">SEE DETAILS</p>
            </button>
          </div>
          <div className="container-oppcard_3">
            <p className="oppCard-text-mobile_1">Director of Brand</p>
            <p className="oppCard-text-mobile_2">
              Full-time Santa Maria, California
            </p>
            <p className="oppCard-text">
              Director of Brand • Full-time • Santa Maria, California
            </p>
            <button className="see-detail">
              <p className="see-text">SEE DETAILS</p>
            </button>
          </div>
        </div>
      </div>

      {/* Ready Part */}

      <div className="container-ready">
        <p className="readyPart-text">
          Ready to be part of our team and grow together?
        </p>

        <p className="readyPart-sendUs">Send us your CV and cover letter:</p>

        <div className="icon-mail-readyPart">
          <div class="container-icon-readyPart">
            <MailOutlined className="icon-mail-readypart" />
          </div>
          <p className="gmail-readypart">recruitment@Techfis.com</p>
        </div>

        <div className="squad_ready_01"></div>
        <div className="squad_ready_02"></div>
        <div className="squad_ready_03"></div>
        <img src={imgready} className="image-ready-opprtunities"></img>
      </div>

      {/* </div> */}
    </>
  );
};

export default Career;

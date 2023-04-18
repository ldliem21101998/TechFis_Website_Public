/** @format */

import React from "react";
import imagebackground from "../../../assets/images/Thumbnail.png";
import { Row, Col } from "antd";
import "./styles.css";
import { FacebookOutlined } from "@ant-design/icons";
function OurTeam() {
  return (
    <div className="container-ourteam">
      <div className="rectangle_02"></div>
      <div className="rectangle_03"></div>
      <div className="rectangle_04"></div>
      <div className="ourteam-top">
        <p
          style={{
            color: "black",
            fontSize: "48px",
            fontWeight: "bold",
            marginTop: "100px",

            width: " 300px",
            height: "74px",
          }}
        >
          Our Team
        </p>
        <p
          style={{
            color: "black",
            fontSize: "24px",
            width: "800px",
            height: "100px",
            marginBottom: "40px",
            //  marginLeft: "300px",
            marginTop: "20px",
            width: "1032px",
            height: "96px",
          }}
        >
          Our company is a young and dynamic company with a start-up environment
          that is always looking for qualified talent to join the team. Work
          closely with the country's most talented product developers and
          engineers on exciting new opportunities from our growing list of
          global partners.
        </p>
        <img
          src={imagebackground}
          style={{
            width: "1180px",
            height: "630px",
            zIndex: "1",
            // marginLeft: "300px",
          }}
        ></img>
      </div>

      <div className="ourteam-bottom">
        <p
          style={{
            color: "#1D1D1D",
            fontSize: "50px",
            fontWeight: "600",
            width: "350px",
            height: "120px",
            lineHeight: "60px",
            marginLeft: "190px",
            marginTop: "200px",
          }}
        >
          Work-Life Highlights
        </p>
      
        <p
          style={{
            color: "#5F6161",
            fontSize: "20px",

            width: "530px",
            height: "120px",
            lineHeight: "160%",
            letterSpacing: "0.3px",
            marginTop: "200px",
          }}
        >
          Join a team of world-class professionals who are driven to build and
          connect today's most advanced technological products and enterprise
          solutions.
        </p>
        <div className="card-ourteam">
          <div class="div_circle">
            <FacebookOutlined style={{ fontSize: "36px", color: "green" }} />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam">
          <div class=" div_circle">
            <FacebookOutlined style={{ fontSize: "36px", color: "green" }} />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam">
          <div class=" div_circle">
            <FacebookOutlined style={{ fontSize: "36px", color: "green" }} />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam">
          <div class=" div_circle">
            <FacebookOutlined
              style={{
                fontSize: "36px",
                color: "green",
                alignItems: "center",
              }}
            />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
        <div className="card-ourteam">
          <div class=" div_circle">
            <FacebookOutlined style={{ fontSize: "36px", color: "green" }} />
          </div>
          <p className="card-ourteam-description">
            Young, fun and dynamic workplace.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;

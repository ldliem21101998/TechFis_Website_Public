/** @format */

import React from "react";
import "./styles.css";
import { MailOutlined } from "@ant-design/icons";
import imgready from "../../../assets/images/image-part.png";
function ReadyPart() {
  return (
    <div className="container-ready">
      <div className="content-readyPart">
        <p
          className="readyPart-text"
          style={{
            fontSize: "36px",
            fontWeight: "500",
            height: "150px",
            width: "300px",
          }}
        >
          Ready to be part of our team and grow together?
        </p>

        <p className="readyPart-sendUs">Send us your CV and cover letter:</p>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div class="container-icon-readyPart">
            <MailOutlined style={{ fontSize: "24px", color: "white" }} />
          </div>
          <p>recruitment@Techfis.com</p>
        </div>
      </div>
      <div className="opprtunitiesimage">
        <img src={imgready} className="image-ready-opprtunities"></img>
      </div>
     
    </div>
  );
}

export default ReadyPart;

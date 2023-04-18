/** @format */

import React from "react";
import "./styles.css";
import { Col, Row } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <div className="container-contact" id="contact">
      {/* <div class="squad_5"></div>
      <div class="squad_6"></div>
      <div class="squad_7"></div> */}

      <Row className="body-contact">
        <Col span={10} className="contact-left">
          <Row>
            <p
              style={{
                fontSize: "40px",
                fontWeight: "600",
                lineHeight: "50px",
                height: "150px",
                width: "375px",
                letterSpacing: "0.3px",
                color: "#FFFFFF",
                marginBottom: "96px",
              }}
            >
              Interested in working together? Let’s get in touch.
            </p>
          </Row>

          <Row style={{ marginRight: "200px", marginBottom: "36px" }}>
            <button class="buttoncontact button_circle_form">
              <MailOutlined style={{ fontSize: "24px", color: "white" }} />
            </button>
            <div style={{ marginTop: "10px" }}>
              <p>Email</p>
              <p>info@tecgfis.com</p>
            </div>
          </Row>

          <Row style={{ marginRight: "200px" }}>
            <button class="buttoncontact button_circle_form">
              <PhoneOutlined style={{ fontSize: "24px", color: "white" }} />
            </button>
            <div style={{ marginTop: "10px" }}>
              <p>Phone</p>
              <p>+84 24 3926 4083</p>
            </div>
          </Row>
        </Col>

        <Col span={14} className="contact-right">
          <ContactForm />
        </Col>
      </Row>
    </div>
  );
}

export default Contact;

/** @format */

import React from "react";
import { Col, Row } from "antd";

import "./styles.css";
import OppCard from "./OppCard";

function Opportunities() {
  return (
    <div className="container-opportunities">
      <div className="content-opportunities" style={{ zIndex: 1 }}>
        <p
          style={{
            color: " #1D1D1D",
            fontSize: "50px",
            lineHeight: "55px",
            letterSpacing: "-1.5px",
            fontWeight: "600",
          }}
        >
          Carrer Opportunities
        </p>
        <p
          style={{
            color: "#1D1D1D",
            fontSize: "20px",
            lineHeight: "32px",

            fontWeight: "400",
            letterSpacing: "0.3px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Interest in working together? We'd love to hear from you
        </p>
      </div>

      <div className="Opptop">
        <OppCard title="Dev Ops Engineer • Full-time • Santa Maria, California " />
        <OppCard title="Head of Growth • Full-time • Santa Maria, California " />
        <OppCard title="Director of Brand • Full-time • Santa Maria, California " />
      </div>

     
    </div>
  );
}

export default Opportunities;

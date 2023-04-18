/** @format */

import React from "react";
import "./styles.css";
function OppCard({ title }) {
  return (
    <div className="container-oppcard">
      <p className="oppCard-text">{title}</p>
      <div className="see-detail">
        <p
          style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "23px",
            letterSpacing: "1px",
            textAlign: "center",
            color: "#16774A",
            marginTop: "10px",
          }}
        >
          SEE DETAILS
        </p>
      </div>
    </div>
  );
}

export default OppCard;

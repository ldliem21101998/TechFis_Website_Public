/** @format */

import { Button } from "antd";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to a backend server
    console.log("Form submitted!");
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="container-form">
      <form className="contact-form">
        <p className="contact-title">We are happy to answers</p>
        <label
          htmlFor="name"
          style={{
            width: "81px",
            height: "14px",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "14px",
            letterSpacingL: "0.3px",
            marginTop: "40px",
            marginBottom: "10px",
          }}
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          style={{
            width: "550px",
            height: "60px",

            background: "#FFFFFF",
            border: "1px solid #DEE5ED",
            borderRadius: "8px",
          }}
        />
        <label htmlFor="email">Email Address</label>

        <input
          type="email"
          id="email"
          name="email"
          style={{
            width: "550px",
            height: "60px",

            background: "#FFFFFF",
            border: "1px solid #DEE5ED",
            borderRadius: "8px",
          }}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          style={{
            width: "550px",
            height: "120px",

            background: "#FFFFFF",
            border: "1px solid #DEE5ED",
            borderRadius: "8px",
          }}
          defaultValue={""}
        />
        <Button shape="round" className="button-send">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

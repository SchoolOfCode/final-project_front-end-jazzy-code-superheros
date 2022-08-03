import React from "react";
import "./style.css";

function ContactCard(props) {
  return (
    <div className="contact-container">
      <div className="contact-title">{props.title}</div>
      <div>{props.children}</div>
    </div>
  );
}

export default ContactCard;

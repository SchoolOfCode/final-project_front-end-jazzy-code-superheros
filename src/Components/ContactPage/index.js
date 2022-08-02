import './style.css';
import React from 'react';
import ContactCard from './ContactCard';

const ContactPage = () => {
    return (
      <div className="contact">
        <h1 className="page-header">Get Help</h1>
        <div className="imageDiv">
          <img
            className="bannerImage"
            src="https://i.imgur.com/VWCzSCo.jpeg"
            alt="container cover, people giving help"
          ></img>
        </div>
        <ContactCard/>
      </div>
    );
  };

  export default ContactPage;
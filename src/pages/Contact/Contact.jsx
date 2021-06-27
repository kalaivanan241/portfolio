import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import FormField from "../../components/FormField/FormField";
import SocialMediaIcons from "../../components/SocialMediaIcons/SocialMediaIcons";
import "./Contact.scss";

const initialData = {
  name: "",
  email: "",
  phone: "",
  notes: "",
};

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(initialData);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (alertMessage) {
      setTimeout(() => {
        setAlertMessage("");
      }, 5000);
    }
  }, [alertMessage]);

  const handleChange = (e) => {
    let data = { ...contactInfo };
    data[e.target.name] = e.target.value;
    setContactInfo({
      ...data,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.apispreadsheets.com/data/14698/", {
      method: "POST",
      body: JSON.stringify({
        data: {
          Timestamp: new Date().toLocaleString().replace(",", ""),
          ...contactInfo,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        setAlertMessage(
          "Thanks for reaching out, I will get back to you soon."
        );
        setContactInfo(initialData);
      } else {
        setAlertMessage(
          "Sorry something went wrong, please try again after some time."
        );
      }
    });
  };

  return (
    <div className="contact">
      {alertMessage && <div className="contact__alert">{alertMessage}</div>}
      <div>
        <h1 className="contact__title">Contact Form</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="contact__form-container">
            <FormField
              id="name"
              name="name"
              label="Name"
              onChange={handleChange}
              value={contactInfo.name}
              required
            />
            <FormField
              type="email"
              id="email"
              name="email"
              label="Email"
              onChange={handleChange}
              value={contactInfo.email}
              required
            />
            <FormField
              type="tel"
              id="phone"
              name="phone"
              label="Phone Number"
              onChange={handleChange}
              value={contactInfo.phone}
            />
            <FormField
              id="notes"
              name="notes"
              label="Notes"
              onChange={handleChange}
              value={contactInfo.notes}
            />
          </div>
          <div className="contact__btn-container">
            <div></div>
            <Button>Submit</Button>
          </div>
          <SocialMediaIcons />
        </form>
      </div>
    </div>
  );
};

export default Contact;

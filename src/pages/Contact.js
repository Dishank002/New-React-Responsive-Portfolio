import "../pages/Contact.css";
import { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    subject: "",
    message: "",
  });

  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("sent") === "1") {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        window.history.replaceState(null, "", window.location.pathname); // remove ?sent=1
      }, 2000);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0aan61a", "template_kbqf95v", form.current, {
        publicKey: "Vhh_eEXu5paRCnnh7",
      })
      .then(
        () => {
          window.location.href = window.location.pathname + "?sent=1";
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="Page">
      <h1 className="Headline">Contact Me</h1>
      <p>I'd love to hear from you — let’s connect !</p>
      <form ref={form} className="ContactForm" onSubmit={sendEmail}>
        {showPopup && (
          <div className="popup">
            <p>Message sent successfully!</p>
          </div>
        )}
        <div className="RowInputs">
          <input
            type="text"
            name="to_name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="from_name"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">
          <IoIosSend />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

import React, {useState} from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section id="contact">
      <h4>GET IN TOUCH</h4>
      <h2>Contact Us</h2>
      <p>Have a question or suggestion? We'd love to hear from you.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p className="contact-success">
          Your message has been entered successfully!
        </p>
      )}
    </section>
  );
};

export default Contact;
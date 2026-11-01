import React, {useState} from "react";
import "./Contact.css";
import toast, {Toaster} from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "4ac60f86-4b80-4e12-9bdd-4820f3d033fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again.");
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
      <Toaster position="top-center" />
    </section>
  );
};

export default Contact;
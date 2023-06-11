import React, { useState } from "react";



function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Here you would handle the form submission logic, such as sending an email or storing the message in a database.
      // We'll just set a success message.
  
      setSuccess(true);
    };
  
    return (

    <main>
        <img className="contactBackground" src="https://cdn.pixabay.com/photo/2018/05/28/22/11/message-in-a-bottle-3437294_1280.jpg" alt="Description of the image" />


        <div className="contact-us">
        <h1>Contact Us</h1>
        {success ? (
          <div className="success-message">
            Thank you for your message! We'll be in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
  
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
  
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
  
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </main>
    );
  }
  
  export default ContactUs;
    



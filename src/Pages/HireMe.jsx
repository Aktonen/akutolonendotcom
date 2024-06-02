import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

// Email Service credentials
import { serviceId, templateId, publicKey } from '../emailService';

function HireMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" required />
      <label>Email</label>
      <input type="email" name="from_email" required />
      <label>Message</label>
      <textarea name="message" required />
      <button type="submit">Send</button>
    </form>
  );
}

export default HireMe;

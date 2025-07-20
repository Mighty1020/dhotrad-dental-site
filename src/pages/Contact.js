
import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label><br />
        <input type="text" name="name" /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" /><br /><br />

        <label>Message:</label><br />
        <textarea name="message" rows="4" cols="50"></textarea><br /><br />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

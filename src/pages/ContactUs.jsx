import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Feel free to reach out for inquiries and support.</p>
      <form>
        {/* Add your contact form here */}
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;

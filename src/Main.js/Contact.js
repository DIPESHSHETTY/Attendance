import React, { useState } from 'react';
 // Import the CSS file

export default function Contact() {
  const [alertMessage, setAlertMessage] = useState('');

  const validateForm = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
      setAlertMessage('Please fill out all fields.');
      return false;
    }

    setAlertMessage('');
    // Submit the form here
    // e.g., using fetch API or a form submission library
  };

  return (
    <section className="Contact">
      <div className="container">
        <h1 id="contact" className="Contact__heading">CONTACT</h1>
        <div className="Contact__separator"></div>
        <div className="row py-5">
          <div className="col-md-6 lg-6 contact-for px-5 py-5">
            <h6>Contact Us</h6>
            <h4 className="Contact__subheading">For Inquiries or Questions</h4>
            <p style={{ fontSize: '10px' }}>Please use the form or call us on 123456789</p>
            <form id="myForm" onSubmit={validateForm} className="">
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="name">First Name</label>
                <input type="text" className="form-control form-field" id="name" />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="name">Last Name</label>
                <input type="text" className="form-control form-field" id="name" />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="email">Email*</label>
                <input type="email" className="form-control form-field" id="email" />
              </div>
              <div className="form-group" style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="message">Message</label>
                <textarea className="form-control form-field" id="message" rows="3" placeholder="Enter your message"></textarea>
              </div>
              <input type="submit" className="btn btn-primary my-3" value="Submit" style={{background:"#3B3A3a",color:"#EDCD1F",border:"none",borderRadius:"0px"}} />
              <br />
              <br />
              {alertMessage && <span id="alertMessage" className="my-3-3" style={{color:"red"}}>{alertMessage}</span>}
            </form>
          </div>
          <div className="col-md-6 lg-6 info py-5">
            <div>
              <h5>Head Office</h5>
              <p style={{ color: '#9a9ea3' }}>
                500 Terry Francine<br />
                Street San Francisco,<br />
                ... CA 94158<br />
                info@mysite.com<br />
                Tel: 123-456-7890 Fax: 123-456-7890
              </p>
            </div>
            <div className="py-5">
              <h5>Employment</h5>
              <p style={{ color: '#9a9ea3' }}>
                To apply for a job with Sphere Constuctions,<br />
                please send a cover letter together with your C.V. to: info@mysite.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



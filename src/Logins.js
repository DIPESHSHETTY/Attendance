// src/Login.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logins.css';
import sies from './sies.png';

const Logins = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRole = email.startsWith('hod') ? 'hod' : 'faculty';
    const dummyCredentials = {
      hod: [
        { email: 'hod1@example.com', password: 'password1' },
        { email: 'hod2@example.com', password: 'password2' }
      ],
      faculty: [
        { email: 'faculty1@example.com', password: 'password1' },
        { email: 'faculty2@example.com', password: 'password2' }
      ]
    };

    const validUser = dummyCredentials[userRole].find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      setMessage(`Welcome, ${userRole.toUpperCase()}!`);
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <section className="vh-150" style={{ backgroundColor: '#fb8c00' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-black">
                <div className="mb-4 text-center">
                  <img src={sies} alt="SIES Logo" className="img-fluid mb-3" />
                  <h3 className="mb-4" style={{ color: '#34495e' }}>SIES GST</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="pass">Password</label>
                    <input
                      type="password"
                      id="pass"
                      className="form-control form-control-lg"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  {message && <p className="message text-danger">{message}</p>}
                  <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                  <hr className="my-4" />
                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                    Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a>
                  </p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy.</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logins;

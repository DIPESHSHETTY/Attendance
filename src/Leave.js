import React, { useState } from 'react';
import './Leave.css';

const Leave = () => {
  const [form, setForm] = useState({
    reason: '',
    startDate: '',
    endDate: '',
    attachment: null
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      attachment: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Apply for Leave</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="reason">Reason for Leave:</label>
            <textarea
              id="reason"
              name="reason"
              value={form.reason}
              onChange={handleChange}
              className="form-control"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="attachment">Attach PDF/Image:</label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              accept=".pdf, .jpg, .jpeg, .png"
              onChange={handleFileChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ) : (
        <div className="application-details">
          <h2>Leave Application</h2>
          <p><strong>Reason for Leave:</strong> {form.reason}</p>
          <p><strong>Start Date:</strong> {form.startDate}</p>
          <p><strong>End Date:</strong> {form.endDate}</p>
          {form.attachment && (
            <p><strong>Attachment:</strong> {form.attachment.name}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Leave;

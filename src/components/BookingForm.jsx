import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    date: '',
    location: '',
    eventType: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    setError(null); // Clear any previous error

    try {
      const response = await fetch('https://djtooloud-website-1.onrender.com/api/book-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Booking failed, please try again later.');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="booking-container">
      <div className="video-background-container">
        {!isMobile && (
          <video autoPlay muted loop className="background-video">
            <source src="/moxies.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="booking-form-container">
        <h2>Book DJ TOOLOUD for Your Event</h2>

        {isSubmitted ? (
          <div className="confirmation-message">
            <h3>Thank you for your booking!</h3>
            <p>We will get back to you shortly with the details.</p>
          </div>
        ) : (
          <>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit} className="booking-form">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Event Date:
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Event Location:
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Event Type:
                <input
                  type="text"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Additional Message/Song List:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                />
              </label>
              <button type="submit" disabled={loading}>
                {loading ? 'Loading...' : 'Book Now'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingForm;

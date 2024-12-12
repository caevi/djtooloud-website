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
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track if it's a mobile screen

  useEffect(() => {
    const checkIfMobile = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkIfMobile(); // Initial check
    window.addEventListener('resize', checkIfMobile); // Listen for window resize

    return () => {
      window.removeEventListener('resize', checkIfMobile); // Cleanup on unmount
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      {/* Conditionally render video background only on non-mobile screens */}
      {!isMobile && (
        <div className="video-background-container">
          <video autoPlay muted loop className="background-video" tabIndex="-1">
            <source src="/moxies.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div className="booking-form-container">
        <h2>Book DJ TOOLOUD for Your Event</h2>

        {/* Policy and Booking Fees Section */}
        <div className="info-box">
          <h3>Booking Policies & Fees</h3>
          <p>
            Please read through our booking policies and fee structure before confirming your booking:
          </p>
          <ul>
      
            <li>A non-refundable deposit of 20% is required to confirm your booking.</li>
            <li>Once I recieve your email, I will contact you myself and discuss the pricing of your event </li>
            <li>The full payment must be made 7 days before the event.</li>
            <li>Cancellation within 72 hours of the event will result in a 50% charge.</li>
            
          </ul>
        </div>

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

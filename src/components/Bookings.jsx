import React, { useEffect, useState } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch bookings from the backend
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings');
        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          throw new Error('Failed to fetch bookings');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Location</th>
            <th>Event Type</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.date}</td>
              <td>{booking.location}</td>
              <td>{booking.eventType}</td>
              <td>{booking.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;

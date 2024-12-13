import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; // Import dotenv
import nodemailer from 'nodemailer'; // Import Nodemailer

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000; // Use the PORT from .env file or default to 5000

// Connect to Djtooloud database using the DB_URI from .env
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true, // Optional: use for better MongoDB connection handling
  useUnifiedTopology: true, // Optional: use for better MongoDB connection handling
})
  .then(() => console.log('Connected to Djtooloud database'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a booking schema and explicitly set the collection name to 'bookings'
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
  location: String,
  eventType: String,
  message: String,
  phoneNumber: String, // Add the phone number field
}, { collection: 'bookings' }); // Collection name set to 'bookings'

// Create a booking model
const Booking = mongoose.model('Booking', bookingSchema);

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, etc.
  auth: {
    user: process.env.EMAIL_USER, // Email address for sending emails
    pass: process.env.EMAIL_PASS, // App-specific password or secure token
  },
});

// Handle POST request for event booking
app.post('/api/book-event', async (req, res) => {
  const { name, email, phoneNumber, date, location, eventType, message } = req.body;

  try {
    // Save the booking to MongoDB
    const newBooking = new Booking({
      name,
      email,
      phoneNumber,
      date,
      location,
      eventType,
      message,
    });

    await newBooking.save();

    // Send email notification to the DJ
    const mailToDJ = {
      from: `"Booking System" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.DJ_EMAIL, // DJ's email address
      subject: 'New DJ Booking Received',
      text: `
        You have a new booking! 🎉

        Details:
        - Name: ${name}
        - Email: ${email}
        - Phone Number: ${phoneNumber}
        - Date: ${date}
        - Location: ${location}
        - Event Type: ${eventType}
        - Message: ${message || 'No additional message provided.'}

        Please review and confirm the booking.
      `,
      html: `
        <h2>You have a new booking! 🎉</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Message:</strong> ${message || 'No additional message provided.'}</p>
        <br>
        <p>Please review and confirm the booking.</p>
      `,
    };

    await transporter.sendMail(mailToDJ);

    // Send confirmation email to the user
    const mailToUser = {
      from: `"Booking System" <${process.env.EMAIL_USER}>`, // Sender address
      to: email, // User's email address
      subject: 'Booking Confirmation - DJ Too Loud',
      text: `
        Hi ${name},

        Thank you for booking DJ Too Loud! 🎶

        Here are your booking details:
        - Name: ${name}
        - Date: ${date}
        - Location: ${location}
        - Event Type: ${eventType}
        - Message: ${message || 'No additional message provided.'}

        Our team will contact you shortly to confirm the details.

        Cheers,
        DJ Too Loud Team
      `,
      html: `
        <h2>Thank you for booking DJ Too Loud! 🎶</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Here are your booking details:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Location:</strong> ${location}</li>
          <li><strong>Event Type:</strong> ${eventType}</li>
          <li><strong>Message:</strong> ${message || 'No additional message provided.'}</li>
        </ul>
        <br>
        <p>Our team will contact you shortly to confirm the details.</p>
        <p>Cheers,</p>
        <p><strong>DJ Too Loud Team</strong></p>
      `,
    };

    await transporter.sendMail(mailToUser);

    res.json({ message: 'Booking received, and emails sent to both the DJ and the user!' });
  } catch (error) {
    console.error('Error booking event or sending email:', error);
    res.status(500).json({ error: 'Error booking event or sending email.' });
  }
});

// Route to get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fetch all bookings
    res.json(bookings); // Return bookings as JSON
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Error fetching bookings.' });
  }
});
// Route to delete a booking by ID
app.delete('/api/bookings/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findByIdAndDelete(id); // Delete the booking by ID
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking successfully deleted' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ error: 'Error deleting booking' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

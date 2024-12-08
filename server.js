import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';  // Import dotenv

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;  // Use the PORT from .env file or default to 5000

// Connect to Djtooloud database using the DB_URI from .env
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,  // Optional: use for better MongoDB connection handling
  useUnifiedTopology: true,  // Optional: use for better MongoDB connection handling
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
  phoneNumber: String,  // Add the phone number field
}, { collection: 'bookings' }); // Collection name set to 'bookings'

// Create a booking model
const Booking = mongoose.model('Booking', bookingSchema);

// Handle POST request for event booking
app.post('/api/book-event', async (req, res) => {
  const { name, email, phoneNumber, date, location, eventType, message } = req.body;

  try {
    const newBooking = new Booking({
      name,
      email,
      phoneNumber,
      date,
      location,
      eventType,
      message,
    });

    await newBooking.save();  // Save the booking to MongoDB

    res.json({ message: 'Booking received, we will contact you soon!' });
  } catch (error) {
    console.error('Error booking event:', error);
    res.status(500).json({ error: 'Error saving booking.' });
  }
});

// Route to get all bookings
app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();  // Fetch all bookings
    res.json(bookings);  // Return bookings as JSON
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Error fetching bookings.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

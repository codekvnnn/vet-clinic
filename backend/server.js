const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Use environment variables for sensitive information
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

// Import routes
const petRoutes = require('./routes/pet');
const appointmentRoutes = require('./routes/appointment');

// Use routes
app.use('/api/pets', petRoutes);
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

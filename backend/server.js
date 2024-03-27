const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
// Calling port # from env file
const PORT = process.env.PORT || 8000;

// Connect to db
connectDB();

const app = express();

// Allowing data to show
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.json({ test: 'JSON data test' });
// });

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.get('*', (req, res) =>
  res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html')
);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

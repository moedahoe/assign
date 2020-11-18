const express = require('express');
const app = express();
const connectDB = require('./config/connectDB');


app.use(express.json());
connectDB();
// Define Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/auth', require('./routes/api/book'))


// const PORT = 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
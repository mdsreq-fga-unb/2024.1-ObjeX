require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.API_PORT || 3000;
const connectDB = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' , credentials :  true}));

app.use('', require('./routes/Router'));

connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

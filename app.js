const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute')

mongoose.connect(process.env.MONGO_CONNECTION_URL).then(() => console.log("Cloud Database Connected")).catch(error => console.log("Error is - " + error));

app.use(express.json());
app.use('/user/api', userRoute)
const PORT = 8000;
app.listen(PORT, () => console.log("Server Started at Port - " + PORT))
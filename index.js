const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;

const app = express();
// enabling body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`server started on port ${port}`));


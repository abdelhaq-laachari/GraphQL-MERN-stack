const express = require("express"); // import express
var { graphqlHTTP } = require('express-graphql');
const dotenv = require("dotenv").config(); // import dotenv
const colors = require("colors"); // import colors
const cors = require("cors"); // import cors
const port = process.env.PORT || 6000; // set our port
const schema = require('./schema/schema'); // import schema
var { buildSchema } = require('graphql');
const connectDB = require("./config/db"); // import db connection
const app = express();


// Connect Database
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Server started on port ${port}`));

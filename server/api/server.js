const express = require("express"); // import express
var { graphqlHTTP } = require('express-graphql');
const dotenv = require("dotenv").config(); // import dotenv
const port = process.env.PORT || 6000; // set our port
const schema = require('./schema/schema'); // import schema
var { buildSchema } = require('graphql');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, () => console.log(`Server started on port ${port}`));

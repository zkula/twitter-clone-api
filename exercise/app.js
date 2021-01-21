const express = require("express");
const Twitter = require("./api/helpers/twitter.js");
const twitter = new Twitter();
const app = express();
const port = 3000;
require("dotenv").config();

//MiddleWare
//Purpose: allows the browser to read the response data
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next(); //Goes to next MW if it exists
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/tweets", (req, res) => {
  console.log(req.query);
  const query = req.query.q;
  const count = req.query.count;

  twitter
    .get(query, count)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

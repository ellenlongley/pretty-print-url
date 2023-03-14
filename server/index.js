import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import axios from "axios";
import fetch from "node-fetch";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const API_KEY = "at_ZWvTYszWn66C1JvAevD1xW15Bc81O";

app.get("/", function (req, res) {
  const url = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${API_KEY}&domainName=${req.query.domainName}&outputFormat=JSON`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      res.send(err);
    });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));

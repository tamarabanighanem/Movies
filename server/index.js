const express = require("express")
const cors = require("cors")
const app = express()
const port = 5050
app.use(cors())
const axios = require('axios');
app.get('/', (req, res) => {
  res.send(x)
});

const options = {
  method: "GET",
  url: "https://imdb-top-100-movies.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Key": "484b0212d1msh0c36ab6ad9a586dp11ade5jsn2e2310973609",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};
var x;
axios.request(options).then((res) => {
  x = res.data
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
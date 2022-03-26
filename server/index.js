const express = require("express");
const cors = require("cors");
const app = express();
const { port } = require('../app/config/config');

app.use(cors());

const db =  require("../app/config/db.config.js");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    // eslint-disable-next-line
    process.exit();
  });

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to job search api server." });
});
// set port, listen for requests
// eslint-disable-next-line
const PORT = port || 3001;
require("../app/routes/service/service.routes")(app);
require("../app/routes/checkout/checkout.routes")(app);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

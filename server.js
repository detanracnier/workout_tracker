const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

//create express app
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger("dev"));

// setup public static pages
app.use(express.static("public"));

// import routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})
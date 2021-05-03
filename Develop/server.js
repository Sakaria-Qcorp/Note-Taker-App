const express = require("express");
const app = express();

PORT = process.env.PORT || 3007;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder for js,html,images,style.css
app.use(express.static("public"));

//require("./routes/htmlRoutes")(app);

var path = require("path");

//Setting up the routes
app.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname,"./public/notes.html"))
});
app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname,"./public/home.html"))
});



//The LISTENER starts the server
app.listen(PORT, function () {
    console.log("Express listening On " +  PORT);
});


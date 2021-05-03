const express = require("express");

const app = express();


PORT = process.env.PORT || 3007;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder for js,html,images,style.css
app.use(express.static("public"));

//Setting up the routes
app.get("/addnotes",(req, res) => {
    res.sendFile(path.join(__dirname,"../public/addnotes.html"))
});




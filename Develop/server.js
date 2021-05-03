const express = require("express");
const app = express();

PORT = process.env.PORT || 3010;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//static folder for js,html,images,style.css
app.use(express.static("public"));

require("./public/routes/paths.js")(app);





//The LISTENER starts the server
app.listen(PORT, function () {
    console.log("Express listening On " +  PORT);
});


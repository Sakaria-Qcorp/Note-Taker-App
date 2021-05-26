var path = require("path");

module.exports = function (app) {
app.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname,"../public/html/notes.html"))
});
app.get("*",(req, res) => {
    res.sendFile(path.join(__dirname,"../public/html/home.html"))
});
};
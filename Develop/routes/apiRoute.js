var noteListItems = require('../db/db.json');
var fs = require('fs');
var path = require('path');



module.exports = function(app){

    app.get("/api/notes",(req, res) => {
        res.json(noteListItems);
    });
       
  app.get("/api/notes", function (req, res) {
        res.json(noteListItems[Number(req.params.id)]);
      });
   
    app.post("/api/notes", (req, res) => {

        const note = req.body;
        const id = noteListItems.length.toString();
        
        note.id = id;

       console.log(id);
    
        noteListItems.push(note);
        fs.writeFile(path.join(__dirname,"../db/db.json"), JSON.stringify(noteListItems), err => {
          if(err) { console.log( err) }
          else { console.log("The note has been saved")};

        })

        res.json(note);


    });
    
    app.delete("/api/notes/:id", function (req, res) {
        const noteTitle = req.params.id;
       // filter database data 
        const result = noteListItems.filter(note => note.id != noteTitle);
       
        // write filtered data back to database 
        fs.writeFile('./db/db.json', JSON.stringify(result), (err) =>{
            if (err) throw err;
            console.log("Note Deleted!");
        })
        noteListItems = result;
        res.json(result);
       
    });

};



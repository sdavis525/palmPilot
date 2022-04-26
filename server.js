const express = require('express');
const path = require("path");
const fs = require('fs');
const textNote = require("./develop/db/db.json");
const { uniUUID }  = require('code');


const PORT = process.env.PORT || 3001;
const app = express();




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.json(textNote)
});


app.post('/api/notes', (req, res) => {
    const newEntry = req.body;
    newEntry.id = uniUUID();
    db.push(newEntry);
    fs.writeFileSync(
        path.join(__dirname, './develop/db/db.json'),
        JSON.stringify(db)
    );
    res.json(newEntry);
});


//Create a Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Create a Route for output page
app.get('/output', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
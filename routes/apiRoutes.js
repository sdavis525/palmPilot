const router = require('express').Router();
const { createNewNote } = require('../lib/Notes');
const { newNotes } = require('../develop/db/db.json');
const { uniUUID } = require('../uuid')


router.get('newNotes', (req, res) => {
  let results = newNotes ;
  if (results) {
    res.json(results);
  } else {
    res.send(404);
  }
});

router.post('/newNotes', (req, res) => {
  req.body.id = uniUUID();
    const notes = createNewNote(req.body, newNotes);
    res.json(notes);
  
});

module.exports = router;
const router = require('express').Router();

const Note = require('./notes-model.js');


router.get('/', (req, res) => {
 
  Note.find()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(error => {
      res.status(500).json({ message: 'Cannot get the list of notes', error} );
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params

    Note.findById(id)
  .then(note => {
    res.status(200).json(note);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get note' });
  });
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params

    Note.findByUserId(id)
  .then(note => {
    res.status(200).json(note);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get note' });
  });
});

router.post('/', (req, res) => {
    const noteData = req.body;
  
    Note.add(noteData)
    .then(note => {
      res.status(201).json(note);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new note' });
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Note.findById(id)
    .then(note => {
      if (note) {
        Note.update(changes, id)
        .then(updatedNote => {
          res.json(updatedNote);
        });
      } else {
        res.status(404).json({ message: 'Could not find note with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update note' });
    });
  });

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Note.remove(id)
    .then(deleted => {
        if (deleted) {
        res.json({ removed: deleted });
        } else {
        res.status(404).json({ message: 'Could not find note with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete note' });
    });
});

module.exports = router;

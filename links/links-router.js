const router = require('express').Router();

const Links = require('./links-model.js');


router.get('/', (req, res) => {
 
  Links.find()
    .then(links => {
      res.status(200).json(links);
    })
    .catch(error => {
      res.status(500).json({ message: 'Cannot get the list of links', error} );
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params

    Links.findById(id)
  .then(link => {
    res.status(200).json(link);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get link' });
  });
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params

    Links.findByUserId(id)
  .then(link => {
    res.status(200).json(link);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get link' });
  });
});

router.post('/', (req, res) => {
    const linkData = req.body;
  
    Links.add(linkData)
    .then(note => {
      res.status(201).json(note);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new link' });
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Links.findById(id)
    .then(link => {
      if (link) {
        Links.update(changes, id)
        .then(updatedLink => {
          res.json(updatedLink);
        });
      } else {
        res.status(404).json({ message: 'Could not find link with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update link' });
    });
  });

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Links.remove(id)
    .then(deleted => {
        if (deleted) {
        res.json({ removed: deleted });
        } else {
        res.status(404).json({ message: 'Could not find link with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete link' });
    });
});

module.exports = router;

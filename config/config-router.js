const router = require('express').Router();

const Conf = require('./config-model.js');


router.get('/', (req, res) => {
 
  Conf.find()
    .then(config => {
      res.status(200).json(config);
    })
    .catch(error => {
      res.status(500).json({ message: 'Cannot get the list of configurations', error} );
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params

    Conf.findById(id)
  .then(config => {
    res.status(200).json(config);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get config' });
  });
});

router.get('/user/:id', (req, res) => {
    const { id } = req.params

    Conf.findByUserId(id)
  .then(config => {
    res.status(200).json(config);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get config' });
  });
});

router.post('/', (req, res) => {
    const configData = req.body;
  
    Conf.add(configData)
    .then(note => {
      res.status(201).json(note);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new config' });
    });
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Conf.findById(id)
    .then(config => {
      if (config) {
        Conf.update(changes, id)
        .then(updatedconfig => {
          res.json(updatedconfig);
        });
      } else {
        res.status(404).json({ message: 'Could not find config with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update config' });
    });
  });

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Conf.remove(id)
    .then(deleted => {
        if (deleted) {
        res.json({ removed: deleted });
        } else {
        res.status(404).json({ message: 'Could not find config with given id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to delete config' });
    });
});

module.exports = router;

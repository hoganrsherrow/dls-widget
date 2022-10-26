const router = require('express').Router();
const { AA } = require('../models');

router.get('/', (req, res) => {
    AA.findAll()
    .then(dbAaData => res.json(dbAaData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
    AA.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbAaData => {
        if(!dbAaData) {
            res.status(404).json({ message: `No AA's found w/ ID ${req.params.id}`});
            return;
        }
        res.json(dbAaData);
    })
    .catch(err => {
        console.log(err);
    })
});


module.exports = router;
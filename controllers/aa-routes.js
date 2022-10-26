const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Trying to access users');
});


module.exports = router;
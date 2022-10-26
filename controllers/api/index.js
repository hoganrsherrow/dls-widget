const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('trying to access the api');
});


module.exports = router;
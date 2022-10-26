const router = require('express').Router();

router.get('/api', (req, res) => {
    res.send('hello from dls-routes.js');
});


module.exports = router;
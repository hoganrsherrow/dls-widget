const router = require('express').Router();

router.get('/api', (req, res) => {
    res.send(`welcome`);
});

module.exports = router;
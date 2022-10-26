const router = require('express').Router();
const homeRouter = require('./home-routes');
const dlsRouter = require('./dls-routes');

router.use('/', homeRouter);
// router.use('/api/', dlsRouter);
router.get('/api', (req, res) => {
    res.send('hello');
});


module.exports = router;
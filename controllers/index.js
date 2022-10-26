const router = require('express').Router();
const homeRouter = require('./home-routes');
const caseRouter = require('./api');
const aaRouter = require('./aa-routes');

router.use('/', homeRouter);
router.use('/api', caseRouter);
router.use('/aa', aaRouter);
// router.use('/api/', dlsRouter);
// router.get('/api', (req, res) => {
//     res.send('hello');
// });


module.exports = router;
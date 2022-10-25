const router = require('express').Router();
const homeRouter = require('./home-routes');

router.use('/api', require('./api/index.js'));
router.use('/', homeRouter);

// router.get('/', (req, res) => {
//     console.log(`=== homepage ===`);
//     res.sendFile('../public/index.html');
// })


module.exports = router;
const sequelize = require('../config/connection');
const { AA, Case } = require('../models');

const aaData = [
    {
        username: 'usherrow',
        name: 'Hogan Sherrow',
        email: 'usherrow@amazon.com'
    },
    {
        username: 'jdavpimo',
        name: 'Joshua Davis',
        email: 'jdavpimo@yahoo.com'
    },
    {
        username: 'larto',
        name: 'Lazarus Tomale',
        email: 'larto@gmail.com'
    },
    {
        username: 'daviwoods',
        name: 'David Woods',
        email: 'david.woods@gmail.com'
    },
    {
        username: 'beccastake',
        name: 'Rebecca Stakes',
        email: 'beccastake@aol.com'
    },
    {
        username: 'caiburg',
        name: 'Caitlyn Burgher',
        email: 'caiburg@comcast.net'
    },
    {
        username: 'mscott',
        name: 'Michael Scott',
        email: 'mscott@dundermifflin.com'
    },
    {
        username: 'lknope',
        name: 'Leslie Knope',
        email: 'lknope@pawnee.org'
    },
    {
        username: 'rswans',
        name: 'Ron Swanson',
        email: 'idonthaveone@noneofyourbusiness.com'
    },
];

const seedAAs = () => AA.bulkCreate(aaData);

module.exports = seedAAs;
const seedAAs = require('./aa-seeds');
const seedCases = require('./case-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('====================');
    await seedAAs();
    console.log('====================');
    await seedCases();
    console.log('====================');

    process.exit(0);
};

seedAll();
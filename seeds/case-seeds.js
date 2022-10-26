const { Case } = require('../models');

const caseData = [
    {
        aa_id: 2
    },
    {
        aa_id: 2
    },
    {
        aa_id: 3
    },
    {
        aa_id: 6
    },
    {
        aa_id: 2
    }
];

const seedCases = () => Case.bulkCreate(caseData);

module.exports = seedCases;
// import all models
const AA = require('./AA');
const Case = require('./Case');

// create associations
AA.hasMany(Case, {
    foreignKey: 'aa_id'
});

Case.belongsTo(AA, {
    foreignKey: 'aa_id'
});

// export bundled models
module.exports = { AA, Case };
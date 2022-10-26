const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Case model
class Case extends Model {

}

Case.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        aa_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'aa',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'dls_case'
    }
);


module.exports = Case;
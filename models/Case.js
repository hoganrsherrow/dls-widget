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
            autoIncrement: false
        },
        aa_id: {
            type: DataTypes.INTEGER,
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
        modelName: 'case'
    }
);


module.exports = Case;
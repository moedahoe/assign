const { Sequelize } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
    sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		author: {
			type: DataTypes.STRING(255),
			allowNull: false
        }
        // By default sequelize adds the timestamps to this shit so it's useless
        // publicationDate: {
        //     type: Date,
        //     allowNull: true
        // }
	},
	{
		tableName: 'Book'
	});
}
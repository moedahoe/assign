const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		firstName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		profilePhoto: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	},
	{
		tableName: 'User'
	});
};
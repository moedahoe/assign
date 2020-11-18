const Sequelize = require("sequelize");

const sequelize = new Sequelize("assign", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  define: {
    paranoid: true,
  },
});

const connectDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("worked");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

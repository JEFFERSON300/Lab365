const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "senai",
  database: "places_trindade",
  port: "5432",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

module.exports = connection;

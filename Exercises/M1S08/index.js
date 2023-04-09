const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres", // qual banco vai se conectar
  host: "localhost", //onde o banco está ?
  username: "postgres", //qual usuario?
  password: "senai", // qual senha?
  database: "exercicio_database", //qual nome do banco de dados?
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
});

sequelize.authenticate();
sequelize.sync();
console.log("Connection has been established successfully.");

const Test = sequelize.define("teste", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

async function addTable(name, age) {
  await Test.create({ name: name, age: age });
}

addTable("Jefferson", 33);
addTable("Maria", 50);

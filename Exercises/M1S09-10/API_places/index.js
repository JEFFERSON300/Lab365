const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const port = 3333;

const connection = require("./src/database");
const Place = require("./src/models/place");
const User = require("./src/models/user");

// Sincronizar com o banco de dados
connection.sync({ alter: true });

app.use(express.json()); // OBRIGATÓRIO

app.post("/places", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      telephone: req.body.telephone,
      opening_hours: req.body.opening_hours,
      description: req.body.description,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    };

    const place = await Place.create(data);
    res.status(201).json(place);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro na aplicação" });
  }
});

app.post("/users", async (req, res) => {
  try {
    const password = req.body.password;

    if (password.length < 8) {
      return res
        .status(201)
        .json({ message: "A senha precisa ter no mínimo 8 caracteres" });
    }

    const data = {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    const user = await User.create(data);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro na aplicação" });
  }
});

app.get("/places", async (req, res) => {
  try {
    const placesData = await Place.findAll();
    res.json(placesData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
});

app.delete("/places/:id", async (req, res) => {
  try {
    // Verificando se o id existe no BD
    const idDatabase = await Place.findByPk(req.params.id);

    if (!idDatabase) {
      return res.status(400).json({ message: "Não existe item com esse id" });
    }

    await Place.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "Item deletedo com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
});

app.put("/places/:id", async (req, res) => {
  try {
    // Verificando se o id existe no BD
    const idDatabase = await Place.findByPk(req.params.id);

    if (!idDatabase) {
      return res.status(400).json({ message: "Não existe item com esse id" });
    }

    await Place.update(
      {
        name: req.body.name,
        telephone: req.body.telephone,
        opening_hours: req.body.opening_hours,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).json({ message: "Modificação realizada com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
});

app.listen(port, () => {
  console.log("Servidor online");
});

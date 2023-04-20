const express = require("express");
const router = express.Router();
router.use(express.json());

router.post("/user", (req, res) => {
  try {
    const newUser = {
      name: req.body.name,
      age: req.body.age,
      post: req.body.post,
      password: req.body.password,
    };

    if (newUser.age < 21) {
      return res.json({ message: "Usuário não possui idade suficiente" });
    }

    if (!newUser.name || !newUser.age || !newUser.post || !newUser.password) {
      return res
        .status(406)
        .json({ message: "Está faltando dados para concluir a operação" });
    }

    res.status(200).json({ message: "Criado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
});

router.delete("/user/:id", (req, res) => {
  try {
    res.status(200).json({ message: "Deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel processar sua solicitação" });
  }
});

module.exports = router;

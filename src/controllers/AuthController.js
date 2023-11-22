const express = require("express");
const UserModel = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
    try {
        // Criar um novo usuário no banco de dados usando os dados recebidos no corpo da requisição
        const newUser = await UserModel.create(req.body);
        User.password = undefined;

        console.log("Novo usuário cadastrado:", newUser);

        return res.json({
            error: false,
            mensagem: "Usuário cadastrado com sucesso!",
            data: newUser
        });
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);

        return res.status(401).json({
            error: true,
            mensagem: "Usuário e/ou senha inválidos."
        });
    }
});

module.exports = router;

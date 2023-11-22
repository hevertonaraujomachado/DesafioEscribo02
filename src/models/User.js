const mongoose = require("../database");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    telefones: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware para criptografia antes de salvar
UserSchema.pre("save", async function (next) {
    try {
        const hash = await bcryptjs.hash(this.senha, 10); // Corrigido para this.senha
        console.log(this);
        console.log(hash);
        this.senha = hash;
        next();
    } catch (error) {
        next(error);
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

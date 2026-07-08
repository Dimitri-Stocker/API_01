import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
})

router.post('/users', async (req, res) => {

    const {name, email, age} = req.body

    await prisma.user.create({
        data: {name, email, age}
    });

    res.status(201).json({ message: `Usuário ${name} criado com sucesso.`});
})

export default router
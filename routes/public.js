import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
});

router.get('/users/:id', async (req, res) => {
    const {id} = req.params;

    const user = await prisma.user.findUnique({
        where: {id}
    });

    if (!user){
        return res.status(404).json({message: `Usuário não encontrado.`})
    };

    res.status(200).json(user);
});

router.post('/users', async (req, res) => {

    const {name, email, age} = req.body

    await prisma.user.create({
        data: {name, email, age}
    });

    res.status(201).json({ message: `Usuário ${name} criado com sucesso.`});
});

router.put('/users/:id', async (req, res) => {
    const {name, email, age} = req.body
    const {id} = req.params
    
    await prisma.user.update({
        where: {id},
        data: {name, email, age}
    });

    res.status(200).json({message: `Usuário ${name} atualizado com sucesso.`});
});

router.delete('/users/:id', async (req, res) => {
    const {id} = req.params

    await prisma.user.delete({
        where: {id}
    });
    res.status(200).json({message: `Usuário deletado com sucesso.`});
});

export default router
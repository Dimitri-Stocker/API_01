import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();

        res.status(200).json(users);
    } catch (error) {
        console.error(error)

        res.status(500).json({ message: `Erro ao buscar usuários.` });
    }
});

router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const user = await prisma.user.findUnique({
            where: { id }
        });

        if (!user) {
            return res.status(404).json({ message: `Usuário não encontrado.` })
        };

        res.status(200).json(user);
    } catch (error) {
        console.error(error);

        res.status(500).json({ message: `Erro ao buscar usuário.` });
    }

});

router.post('/users', async (req, res) => {
    try {
        const { name, email, age } = req.body

        if (!name || !email || !age) {
            return res.status(400).json({ message: `Nome, email e idade são obrigatórios.` })
        }

        const userExists = await prisma.user.findUnique({
            where: { email }
        })

        if (userExists) {
            return res.status(409).json({ message: `Email já cadastrado.` });
        }

        await prisma.user.create({
            data: { name, email, age }
        });

        res.status(201).json({ message: `Usuário ${name} criado com sucesso.` });
    } catch (error) {
        console.error(error);

        res.status(500).json({ message: `Erro interno do servidor.` });
    }
});

router.put('/users/:id', async (req, res) => {
    try {
        const { name, email, age } = req.body
        const { id } = req.params

        const userExists = await prisma.user.findUnique({
            where: { id }
        })

        if (!userExists) {
            return res.status(404).json({ message: `Usuário não encontrado.` });
        }

        await prisma.user.update({
            where: { id },
            data: { name, email, age }
        });

        res.status(200).json({ message: `Usuário ${name} atualizado com sucesso.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Erro interno do servidor.` });
    }

});

router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params

        const userExists = await prisma.user.findUnique({
            where: {id}
        })

        if (!userExists){
            return res.status(409).json({message:`Usuário não encontrado.`})
        }

        await prisma.user.delete({
            where: { id }
        });
        res.status(200).json({ message: `Usuário deletado com sucesso.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({message:`Erro interno do servidor.`})
    }

});

export default router
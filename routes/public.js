import { Router } from "express";

const router = Router();

let users = [];

router.get('/users', (req, res) => {
    res.json(users);
})

router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
})

export default router
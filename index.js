import express from 'express'
import 'dotenv/config'
import publicRoute from './routes/public.js'

const app = express();
app.use(express.json());

app.use('/', publicRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
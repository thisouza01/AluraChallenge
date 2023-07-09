import express from "express";
import mongoose from "mongoose";
import depoimentoSchema from "./src/model/Depoimento.js";

const app = express();
const port = 3000;

app.use(express.json());

//connection db
mongoose
.connect('mongodb+srv://thiago:97thi43ago@alura.leaozsd.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Banco ON: Atlas'))
.catch((error) => (console.error(error)));

//index - routes
app.get('/', (req, res) => {
    res.send('Welcome to my API!!');
});

app.get('/depoimentos', async (req, res) => {
    try {
        let buscaDepoimentos = await depoimentos.find();

        res.status(200).send(buscaDepoimentos);
    } catch(err) {
        res.status(500).send(err)
    }
});

app.post('/depoimentos', async (req, res) => {
    const resultado = depoimentoSchema(req.body);
    resultado
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

app.put('/depoimentos/:id', (req, res) => {
    const id = req.params.id;

    res.send('depoimento atualizado!')
});

app.delete('/depoimentos/:id', (req, res) => {
    const id = req.params.id;

    res.send('depoimento deletado!')
});

// server
app.listen(port, () => console.log(`Servidor ON: http://localhost:${port}`))



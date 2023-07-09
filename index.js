import express from "express";
import mongoose from "mongoose";
import depoimentoSchema from "./src/model/Depoimento.js";
import Depoimento from "./src/model/Depoimento.js";

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

// get all depoimentos
app.get('/depoimentos', (req, res) => {
    depoimentoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// create depoimento
app.post('/depoimentos', (req, res) => {
    const resultado = depoimentoSchema(req.body);
    resultado
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// update depoimento
app.put('/depoimentos/:id', (req, res) => {
    const { id } = req.params;
    const { foto, depoimento, nome } = req.body;
    depoimentoSchema
        .findByIdAndUpdate({ _id: id }, { $set: {foto, depoimento, nome} })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// delete depoimento
app.delete('/depoimentos/:id', (req, res) => {
    const id = req.params.id;

    depoimentoSchema
        .findByIdAndDelete({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
});

// server
app.listen(port, () => console.log(`Servidor ON: http://localhost:${port}`))



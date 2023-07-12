import express from "express";
import DepoimentoController from "../controller/depoimentoController.js";

const router = express.Router();

router
    .get('/depoimentos', DepoimentoController.listarDepoimentos)
    .get('/depoimentos/:id', DepoimentoController.listarUmDepoimento)
    .get('/depoimentos-home', DepoimentoController.listarTresDepoimentosAleatorios)
    .post('/depoimentos', DepoimentoController.cadastrarDepoimento)
    .put('/depoimentos/:id', DepoimentoController.atualizaDepoimento)
    .delete('/depoimentos/:id', DepoimentoController.deletarDepoimento);

export default router;
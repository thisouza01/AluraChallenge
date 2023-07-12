import express from "express";
import depoimentos from "./depoimentoRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Welcome to my API!!')
    });

    app.use(
        express.json(),
        depoimentos
    );
};

export default routes;
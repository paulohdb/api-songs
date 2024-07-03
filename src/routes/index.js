import express from "express";
import songs from "./songsRoutes.js";
import records from "./recordsRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send("Hello Back-end"));
  app.use(express.json(), songs, records);
};

export default routes;
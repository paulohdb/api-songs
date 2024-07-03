import express from "express";
import SongController from "../controllers/songController.js";

const routes = express.Router();

routes.get("/songs", SongController.listSongs);
routes.get("/songs/search", SongController.listSongByAuthor);
routes.get("/songs/:id", SongController.listSongById);
routes.post("/songs", SongController.createSong);
routes.put("/songs", SongController.updateSong)
routes.delete("/songs/:id", SongController.deleteSong)

export default routes;
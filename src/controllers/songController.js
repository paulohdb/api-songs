import song from "../model/Song.js";
import { record } from "../model/Record.js";

class SongController {

  static async listSongs (req, res) {
    try {
      const listSongs = await song.find({});
      res.status(200).json(listSongs);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail requirement`})
    }
  };

  static async listSongById (req, res) {
    try {
      const id = req.params.id;
      const songFound = await song.findById(id);
      res.status(200).json(songFound);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail to find the song`})
    }
  };

  static async createSong (req, res) {
    const newSong = req.body;
    try {
      const recordFound = await record.findById(newSong.record);
      const songComplete = { ...newSong, record: { ...recordFound._doc } };
      const songCreated  = await song.create(songComplete)
      res.status(201).json({ message: "Successfully created", song: songCreated });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - failed to create a song` });
    }
  };

  static async updateSong (req, res) {
    try {
      const id = req.params.id;
      await song.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Song has been updated"});
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail to update the song`})
    }
  };

  static async deleteSong (req, res) {
    try {
      const id = req.params.id;
      await song.findByIdAndDelete(id);
      res.status(200).json({ message: "Song has been deleted"});
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail to delete the song`})
    }
  };

  static async listSongByAuthor(req, res) {
    const author = req.query.author;
    try {
      const songsByAuthor = await song.find({ author: author })
      res.status(200).json(songsByAuthor);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail requirement`})
    }
  }
};

export default SongController;
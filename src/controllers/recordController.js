import { record } from "../model/Record.js";

class RecordController {

  static async listRecords (req, res) {
    try {
      const listRecords = await record.find({});
      res.status(200).json(listRecords);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail requirement`})
    }
  };

  static async listRecordById (req, res) {
    try {
      const id = req.params.id;
      const recordFound = await record.findById(id);
      res.status(200).json(recordFound);
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail to find the record`})
    }
  };

  static async createRecord (req, res) {
    try {
      const newRecord = await record.create(req.body);
      res.status(201).json({ message: "Successfully created", record: newRecord });
    } catch (err) {
      res.status(500).json({ message: `${err.message} - failed to create a record` });
    }
  };

  static async updateRecord (req, res) {
    try {
      const id = req.params.id;
      await record.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "The record has been updated"});
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail to update the record`})
    }
  };

  static async deleteRecord (req, res) {
    try {
      const id = req.params.id;
      await record.findByIdAndDelete(id);
      res.status(200).json({ message: "The record has been deleted"});
    } catch (err) {
      res.status(500).json({ message: `${err.message} - fail to delete the record`})
    }
  };
};

export default RecordController;
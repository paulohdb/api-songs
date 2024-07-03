import express from "express";
import RecordController from "../controllers/recordController.js";

const routes = express.Router();

routes.get("/records", RecordController.listRecords);
routes.get("/records/:id", RecordController.listRecordById);
routes.post("/records", RecordController.createRecord);
routes.put("/records", RecordController.updateRecord)
routes.delete("/records/:id", RecordController.deleteRecord)

export default routes;
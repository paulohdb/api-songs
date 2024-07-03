import mongoose, { mongo } from "mongoose"

async function connectDb() {
  mongoose.connect(process.env.DB_CONNECTION);
  return mongoose.connection;
}

export default connectDb;
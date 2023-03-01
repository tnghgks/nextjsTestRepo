import { connect, connection } from "mongoose";

const options: any = {
  useUnifiedTopology: true,

  useNewUrlParser: true,
};

async function dbConnect() {
  if (!connection.readyState) {
    if (!process.env.MONGO_URI) return;
    console.log("Connecting to DB...");
    connect(process.env.MONGO_URI, options);
  }
}
export default dbConnect;

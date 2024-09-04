import mongoose from "mongoose";

const ConnectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log(`The Server is Conneected with Database`);
    })
    .catch(() => {
      console.log(`Error while connecting with database: ${err.messaage}`);
      process.exit(1);
    });
};

export default ConnectDB;

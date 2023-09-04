import mongoose from "mongoose";

const connection = async () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to Mongodb");
    })
    .catch(err => {
      console.log(err);
      console.log(`${err} did not connect`);
    });
};
export default connection;
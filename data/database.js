import mongoose from "mongoose";
export const connectBD = () => {
  mongoose
    .connect(process.env.MongoURI, {
      dbName: "NodeAPI",
    })
    .then(() => console.log("Database is connected"))
    .catch((e) => console.log(e));
};

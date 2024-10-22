import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect('mongodb+srv://abhii:abhii-4788@cluster1.jgdnh.mongodb.net/')
    .then(() => console.log("DB Connected..."));
};

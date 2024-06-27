import mongoose from 'mongoose';

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL as string;
  try {
    const conn = await mongoose.connect(MONGO_URL);

    console.log(`Mongo DB connected : ${conn.connection.port}`);
  } catch (error) {
    console.error(`Error on connection to the DB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;

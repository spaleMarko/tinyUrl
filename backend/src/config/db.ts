import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://spalemarko1991:martina@cluster0.8bzdvhx.mongodb.net/tinyurl?retryWrites=true&w=majority&appName=Cluster0'
    );

    console.log(`Mongo DB connected : ${conn.connection.port}`);
  } catch (error) {
    console.error(`Error on connection to the DB: ${error}`);
    process.exit(1);
  }
};

export default connectDB;

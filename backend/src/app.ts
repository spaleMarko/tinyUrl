import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

// Config
import connectDB from './config/db';

// Routes
import urlRoutes from './routes/urlRoutes';

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

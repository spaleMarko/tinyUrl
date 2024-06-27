import express from 'express';
import cors from 'cors';

// Config
import connectDB from './config/db';

// Routes
import urlRoutes from './routes/urlRoutes';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', urlRoutes);

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});

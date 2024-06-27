import express from 'express';
import cors from 'cors';

// Routes
import urlRoutes from './routes/urlRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', urlRoutes);

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});

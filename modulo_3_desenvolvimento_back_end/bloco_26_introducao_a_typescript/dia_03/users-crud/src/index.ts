import express from 'express';
import userRoutes from './database/routes/user.routes';

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Listening port ${PORT}`);
});
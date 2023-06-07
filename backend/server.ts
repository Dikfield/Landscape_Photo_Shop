import express from 'express';
import productRoutes from './routes/productRoutes';
import connectDB from './data/db';
import {
  notFound,
  errorHandler,
} from './middleware/errorMiddleware';
import { config } from './config/config';

const port = config.PORT || 8000;

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler );

app.listen(port, () =>
  console.log(`Server running on port ${port}`),
);

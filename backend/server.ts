import express from 'express';
import productRoutes from './routes/productRoutes';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';
import connectDB from './data/db';
import {
  notFound,
  errorHandler,
} from './middleware/errorMiddleware';
import { config } from './config/config';

const port = config.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server running on port ${port}`),
);

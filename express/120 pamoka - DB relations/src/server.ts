import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productsRouter from './routers/products-router';

const server = express();

// Middlewares
server.use(morgan(':method :url :status'));
server.use(express.static('public'));
server.use(express.json());
server.use('/api/products', productsRouter);

mongoose.connect(
  'mongodb+srv://admin:Vilnius123@database.mxlmbz9.mongodb.net',
  {
    retryWrites: true,
    w: 'majority'
  },
  (error) => {
    if (error) {
      console.log(`Nepavyko Prisijungti:\n${error.message}`);
      return;
    }
    console.log('Successfully connected to MongoDB');
    server.listen(1337, () => console.log(`Appliaction server is running on: http://localhost:1337`));
  }
);

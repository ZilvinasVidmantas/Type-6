import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productsRouter from './routers/products-router';
import categoriesRouter from './routers/categories-router';
import userRouter from './routers/user-router';
import dotenv from 'dotenv';

dotenv.config();
const server = express();

const DB_CONNECTION_URL = process.env.DB_CONNECTION_URL;
if (DB_CONNECTION_URL === undefined) throw new Error('Set up DB_CONNECTION_URL environment variable!');

// Middlewares
server.use(morgan(':method :url :status'));
server.use(express.static('public'));
server.use(express.json());
server.use('/api/products', productsRouter);
server.use('/api/categories', categoriesRouter);
server.use('/api/users', userRouter);

mongoose.connect(
  DB_CONNECTION_URL,
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

/*
  // 1. Prisijungus ar prisiregistravus, grąžinti vartotojui token'ą su jo užšifruota informacija - Done.
  9:05
  // 2. Po Prisijungimo daryti užklausas siunčiant prisijungimo token'ą - Done
  // 3. Parašyti AuthMiddleware, kuris tikrintų token'ą ir atmestų užklausas be token'o
  10:00
  -
  -
  4. Pristaikyti AuthMiddleware užklausoms, kurios turėtų reikalauti prisijungimo
  ---------------------------------
  išspręst problemą su tipų įtraukimu, kad compiler'is ir ts-server'is matytų ir nuadotų tuos pačius tipus
*/

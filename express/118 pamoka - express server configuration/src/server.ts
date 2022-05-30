import express from 'express';
import morgan from 'morgan';
import productsRouter from './routers/products-router';

const server = express();

server.use(morgan(':method :url :status'));
server.use(express.static('public'));
server.use('/api/products', productsRouter);

server.listen(1337, () => console.log(`Server is running on: http://localhost:1337`));
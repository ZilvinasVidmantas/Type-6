import express from 'express';
import morgan from 'morgan';

const server = express();

server.use(morgan('tiny'));
server.use(express.static('public'));

server.listen(1337, () => console.log(`Server is running on: http://localhost:1337`));
// 10:25
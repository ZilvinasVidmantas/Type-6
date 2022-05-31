import express from 'express';
import morgan from 'morgan';
import productsRouter from './routers/products-router';

const server = express();

server.use(morgan(':method :url :status'));
server.use(express.static('public'));
server.use('/api/products', productsRouter);

server.listen(1337, () => console.log(`Server is running on: http://localhost:1337`));

/*
  Sukurkite savo sugalvotos kolekcijos parsiuntimą ir įrašo trynima:
    * sukurkite tam atskirą router, nurodant maršrutus
    * sukurkite tam atskirą controller, aprašant logiką
    * Susikurkite Postman programoje užklausas ir jas išsaugokite
    
  Užduotis atlikte TDD (Test Driven Development principu):
    * Vykdykite planuojamas užklausas tam tikrai adresas, gaudami neigiamą Express žinutę
    * Parašykite maršrutus, kur aptarnautų užklausas
    * Aprašykite užklausų aptarnavimą, teisingų duomenų atveju
    * Aprašykite užklausų aptarnavimą, neteisingų duomenų atveju
    * Struktūrizuokite kodą
    * Vėl patikrinkite, ar teisingai veikia kodas
*/

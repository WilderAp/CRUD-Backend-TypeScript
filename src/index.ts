
import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import router from './routes/main';

const server: Express = express();
const PORT: string | number = 3001;

server.use(express.json());
server.use(morgan('dev'));

server.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use('/', router);

server.listen(PORT, () => console.log(`Server levantado en el puerto: ${PORT}`))
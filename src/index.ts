import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import carrerasRoutes from './routes/carrerasRoutes';
import jornadasRoutes from './routes/jornadasRoutes';
import diasJornadas from './routes/diasJornadasRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{

    public app: Application;
    

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 4000);
        this.app.set('host', "www.universidadguatemalteca.com.gt" || "localhost");
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use('/cruds/carreras', carrerasRoutes);
        this.app.use('/cruds/jornadas', jornadasRoutes);
        this.app.use('/cruds/diasjornadas', diasJornadas);

    }

    iniciar():void{
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo en el puerto: " + this.app.get('port'));
        });
    }

}

const server = new Server();
server.iniciar();
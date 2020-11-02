import * as restify from 'restify';
import "reflect-metadata";
import { StudentRouter } from '../Router/StudentRouter';
export class App {

    public server: restify.Server;

    studentRouter:StudentRouter = new StudentRouter();

    constructor() {
        this.server = restify.createServer();
        console.log(" App Constuctor Created");
        this.config();
        this.studentRouter.routes(this.server);
    }
    config() {
        console.log("Loadning configration")
        this.server.use(restify.plugins.bodyParser({ mapParams: true }));
    }
}

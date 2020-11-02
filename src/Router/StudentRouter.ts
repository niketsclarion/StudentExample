import * as restify from 'restify';
import { StudentController } from '../Controller/StundentController';

export class StudentRouter {
    constructor (private studentController:StudentController = new StudentController()){};

    public routes(server:restify.Server) {

        console.log("Registered Student Route");

        server.get("/students",(req: restify.Request,res:restify.Response,next:restify.Next) => {
            console.log("Getting Student");
           return this.studentController.getStudents(req,res);
            next();
        });
    }
}
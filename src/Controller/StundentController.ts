import * as restify from 'restify';
import { Student } from '../entity/Student';
import { StudentService } from '../Service/StudentService';
export class StudentController {

    constructor(private studService:StudentService = new StudentService()) {
        console.log("Student controller Object Created..")
     }
      addStudent(req: restify.Request, res: restify.Response) {
        this.studService.addStudent(req.body);
        res.send(200, "Success");
    }
}
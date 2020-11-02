import * as restify from 'restify';
import { Student } from '../entity/Student';
import { StudentService } from '../Service/StudentService';
export class StudentController {

    constructor(private studService:StudentService = new StudentService()) {
        console.log("Student controller Object Created..")
     }

     getStudents(req: restify.Request, res: restify.Response) {
        var students: Student[] = this.studService.getAllStudent();
        res.send(200, students);//.then(val=>{console.log("Controller",val)});
        
    }
}
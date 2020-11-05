import * as restify from 'restify';
import { Student } from '../entity/Student';
import { StudentService } from '../Service/StudentService';
export class StudentController {

    constructor(private studService:StudentService = new StudentService()) {
        console.log("Student controller Object Created..")
     }
     async addStudent(req: restify.Request, res: restify.Response) {
        var std: Student = new Student();
        std.emaild = req.body.emaild;
        std.mobileNo = req.body.mobileNo;
        std.name = req.body.name;
        var data: Student = await this.studService.saveStudent(std);
        console.log(data);
        res.send(200,data);
    }
  
    async getStudents(req: restify.Request, res: restify.Response) {
        var students: Student[] = await this.studService.getAllStudent();
       console.log(students);
        res.send(200, students);
    }
 
}
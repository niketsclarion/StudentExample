import { Student } from "../entity/Student";

export class StudentService {

    constructor() {
        console.log("Creating Student Service..")
    }
    getAllStudent(): Student[] {
        console.log("Inside Get All Student ");
        let stud: Student;
        let students: Student[] = [];
        stud = new Student();
        stud.id=1;
        stud.emaild="abc@xyz.com";
        stud.name="abc";
        stud.mobileNo="myMobileNo";
        students.push(stud);

        stud = new Student();
        stud.id=2;
        stud.emaild="xyz@abc.com";
        stud.name="xyz";
        stud.mobileNo="myMobileNo";
        return students;
    }
}
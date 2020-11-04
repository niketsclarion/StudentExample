import { Student } from "../entity/Student";
import { StudentRepo } from "../Repository/StudentRepo";

export class StudentService {

    stdRepo:StudentRepo = new StudentRepo();
    constructor() {
        console.log("Creating Student Service..")
    }
     
    addStudent(std:Student) : Student {
        return this.stdRepo.addStudent(std);
    }
}
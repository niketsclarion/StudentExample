import { Student } from "../entity/Student";
import { StudentRepo } from "../Repository/StudentRepo";

export class StudentService {

    stdRepo:StudentRepo = new StudentRepo();
    constructor() {
        console.log("Creating Student Service..")
    }
    async getAllStudent(): Promise<Student[]> {
        return await this.stdRepo.getStudents();
    }
  
    async saveStudent(student: Student): Promise<Student> {
        return this.stdRepo.saveStudent(student);
    }
 
}
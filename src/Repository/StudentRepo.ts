import { Any, Connection, createConnection } from 'typeorm';
import { mysqlConnection } from '../config/dbconfig';
import { Student } from '../entity/Student';

export class StudentRepo {

    async saveStudent(student: Student): Promise<Student> {
        return await createConnection().then(async connection => {
            const retval = await connection.manager.save(student);
            console.log(retval);
            connection.close();
            return retval;
        });
    }
    async getStudent(): Promise<Student[]> {
        return this.getStudents();
    }
  
    async getStudents(): Promise<Student[]> {
        return await createConnection().then(connection => this.findStudent(connection));
    }
    async findStudent(connection: Connection) {
        console.log("Creating Connection and Return Student")
        const retval = await connection.manager.find(Student);
        console.log(retval);
        connection.close();
        return retval;
    }
 
}
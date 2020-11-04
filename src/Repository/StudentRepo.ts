import { Any } from 'typeorm';
import { mysqlConnection } from '../config/dbconfig';
import { Student } from '../entity/Student';

export class StudentRepo {

    dbConfig: mysqlConnection;

    constructor() {
        this.dbConfig = new mysqlConnection()
    }
    
    public addStudent(std: Student) :any {
            const str_std = { "name": std.name,"mobileNo":std.mobileNo,"emaild":std.emaild};
             this.dbConfig.getConnection().query("insert into student set ?",str_std,(err,res)=> {
          if(err) throw err;
                 console.log(res); 
                 return res;
                 });
    }
}
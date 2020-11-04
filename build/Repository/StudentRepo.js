"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbconfig_1 = require("../config/dbconfig");
var Student_1 = require("../entity/Student");
var StudentRepo = /** @class */ (function () {
    function StudentRepo() {
        this.dbConfig = new dbconfig_1.mysqlConnection();
    }
    StudentRepo.prototype.getStudentQuery = function () {
        var students = [];
        return this.dbConfig.getConnection().query("Select * from student", function (err, rows) {
            rows.forEach(function (row) {
                var std = new Student_1.Student();
                std.id = row.id;
                std.emaild = row.emaild;
                std.mobileNo = row.mobileNo;
                std.name = row.name;
                students.push(std);
            });
            console.log(students);
            return students;
        });
    };
    StudentRepo.prototype.addStudent = function (std) {
        //    const str_emp = { "id": std.id, "emp_name": std.emp_name,"emp_designation":emp.emp_designation };
        //     this.dbConfig.getConnection().query("insert into employee set ?",str_emp,(err,res)=> {
        //         if(err) throw err;
        //         console.log(res);
        //         });
    };
    return StudentRepo;
}());
exports.StudentRepo = StudentRepo;
//# sourceMappingURL=StudentRepo.js.map
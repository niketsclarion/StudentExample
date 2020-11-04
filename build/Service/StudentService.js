"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentRepo_1 = require("../Repository/StudentRepo");
var StudentService = /** @class */ (function () {
    function StudentService() {
        this.stdRepo = new StudentRepo_1.StudentRepo();
        console.log("Creating Student Service..");
    }
    StudentService.prototype.getAllStudent = function () {
        console.log("Inside Get All Student ");
        return this.stdRepo.getStudentQuery();
    };
    return StudentService;
}());
exports.StudentService = StudentService;
//# sourceMappingURL=StudentService.js.map
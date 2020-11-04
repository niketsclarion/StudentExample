"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentService_1 = require("../Service/StudentService");
var StudentController = /** @class */ (function () {
    function StudentController(studService) {
        if (studService === void 0) { studService = new StudentService_1.StudentService(); }
        this.studService = studService;
        console.log("Student controller Object Created..");
    }
    StudentController.prototype.getStudents = function (req, res) {
        var students = this.studService.getAllStudent();
        console.log("Inside Contoroller ", students);
        res.send(200, students);
    };
    return StudentController;
}());
exports.StudentController = StudentController;
//# sourceMappingURL=StundentController.js.map
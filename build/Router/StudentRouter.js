"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StundentController_1 = require("../Controller/StundentController");
var StudentRouter = /** @class */ (function () {
    function StudentRouter(studentController) {
        if (studentController === void 0) { studentController = new StundentController_1.StudentController(); }
        this.studentController = studentController;
    }
    ;
    StudentRouter.prototype.routes = function (server) {
        var _this = this;
        console.log("Registered Student Route");
        server.get("/students", function (req, res, next) {
            console.log("Getting Student");
            return _this.studentController.getStudents(req, res);
            next();
        });
    };
    return StudentRouter;
}());
exports.StudentRouter = StudentRouter;
//# sourceMappingURL=StudentRouter.js.map
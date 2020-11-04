"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
require("reflect-metadata");
var StudentRouter_1 = require("../Router/StudentRouter");
var App = /** @class */ (function () {
    function App() {
        this.studentRouter = new StudentRouter_1.StudentRouter();
        this.server = restify.createServer();
        console.log(" App Constuctor Created");
        this.config();
        this.studentRouter.routes(this.server);
    }
    App.prototype.config = function () {
        console.log("Loadning configration");
        this.server.use(restify.plugins.bodyParser({ mapParams: true }));
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=App.js.map
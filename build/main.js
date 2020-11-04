"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./config/App");
var app = new App_1.App();
app.server.listen(3001, function () {
    console.log("Restify Server Start on  " + 3001);
});
//# sourceMappingURL=main.js.map
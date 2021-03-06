"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var product_1 = __importDefault(require("./handlers/product"));
var order_1 = __importDefault(require("./handlers/order"));
var user_1 = __importDefault(require("./handlers/user"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.get("/", function (req, res) {
    res.send("Deployed from EB CLI!");
});
(0, product_1.default)(app);
(0, order_1.default)(app);
(0, user_1.default)(app);
app.listen(port, function () {
    console.log("Starting app on port " + port);
});
exports.default = app;

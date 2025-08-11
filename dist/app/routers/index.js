"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = require("../modules/user/router");
const router = (0, express_1.Router)();
const routerProvider = [
    {
        path: "/users",
        route: router_1.UserRouter,
    },
];
routerProvider.forEach((route) => router.use(route.path, route.route));
exports.default = router;

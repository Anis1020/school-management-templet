"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router_1 = require("../modules/user/router");
const router_2 = require("../modules/student/router");
const router_3 = require("../modules/academicSemester/router");
const router_4 = require("../modules/academicFaculty/router");
const router_5 = require("../modules/academicDepartment/router");
const router_6 = require("../modules/course/router");
const router_7 = require("../modules/semesterRegistration/router");
const router = (0, express_1.Router)();
const routerProvider = [
    {
        path: "/users",
        route: router_1.UserRouter,
    },
    {
        path: "/students",
        route: router_2.StudentRoute,
    },
    {
        path: "/academic-semesters",
        route: router_3.AcademicSemesterRoute,
    },
    {
        path: "/academic-faculty",
        route: router_4.AcademicFacultyRoute,
    },
    {
        path: "/academic-department",
        route: router_5.AcademicDepartmentRoute,
    },
    {
        path: "/courses",
        route: router_6.CourseRoute,
    },
    {
        path: "/semester-registrations",
        route: router_7.SemesterRegistrationRoute,
    },
];
routerProvider.forEach((route) => router.use(route.path, route.route));
exports.default = router;

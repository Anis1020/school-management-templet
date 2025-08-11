import { Router } from "express";
import { UserRouter } from "../modules/user/router";
import { StudentRoute } from "../modules/student/router";
import { AcademicSemesterRoute } from "../modules/academicSemester/router";
import { AcademicFacultyRoute } from "../modules/academicFaculty/router";
import { AcademicDepartmentRoute } from "../modules/academicDepartment/router";

const router = Router();
const routerProvider = [
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/students",
    route: StudentRoute,
  },
  {
    path: "/academic-semesters",
    route: AcademicSemesterRoute,
  },
  {
    path: "/academic-faculty",
    route: AcademicFacultyRoute,
  },
  {
    path: "/academic-department",
    route: AcademicDepartmentRoute,
  },
];

routerProvider.forEach((route) => router.use(route.path, route.route));

export default router;

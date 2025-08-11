import { Router } from "express";
import { UserRouter } from "../modules/user/router";
import { StudentRoute } from "../modules/student/router";
import { AcademicSemesterRoute } from "../modules/academicSemester/router";
import { AcademicFacultyRoute } from "../modules/academicFaculty/router";
import { AcademicDepartmentRoute } from "../modules/academicDepartment/router";
import { CourseRoute } from "../modules/course/router";
import { SemesterRegistrationRoute } from "../modules/semesterRegistration/router";
import { OfferedCourseRoute } from "../modules/offeredCourse/router";
import { AdminRoute } from "../modules/admin/router";
import { FacultyRoute } from "../modules/faculty/router";

const router = Router();
const routerProvider = [
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/admins",
    route: AdminRoute,
  },
  {
    path: "/faculties",
    route: FacultyRoute,
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
  {
    path: "/courses",
    route: CourseRoute,
  },
  {
    path: "/semester-registrations",
    route: SemesterRegistrationRoute,
  },
  {
    path: "/offered-course",
    route: OfferedCourseRoute,
  },
];

routerProvider.forEach((route) => router.use(route.path, route.route));

export default router;

import { Router } from "express";
import { UserRouter } from "../modules/user/router";
import { StudentRoute } from "../modules/student/router";

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
];

routerProvider.forEach((route) => router.use(route.path, route.route));

export default router;

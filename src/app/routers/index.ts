import { Router } from "express";
import { UserRouter } from "../modules/user/router";

const router = Router();
const routerProvider = [
  {
    path: "/users",
    route: UserRouter,
  },
];

routerProvider.forEach((route) => router.use(route.path, route.route));

export default router;

import { Router } from "express";
import { UserController } from "./controller";

const router = Router();
router.post("/create-student", UserController.createStudent);
router.post("/create-faculty", UserController.createFaculty);
router.post("/create-admin", UserController.createAdmin);

export const UserRouter = router;

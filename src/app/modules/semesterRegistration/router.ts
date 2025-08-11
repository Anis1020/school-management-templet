import { Router } from "express";
import { SemesterRegistrationController } from "./controller";

const router = Router();

router.post(
  "/create-semester-registration",
  SemesterRegistrationController.createSemesterRegistration
);
router.get("/", SemesterRegistrationController.getAllSemesterRegistration);
router.get(
  "/:id",
  SemesterRegistrationController.getSingleSemesterRegistration
);
router.patch("/:id", SemesterRegistrationController.updateSemesterRegistration);
router.delete(
  "/:id",
  SemesterRegistrationController.deleteSemesterRegistration
);

export const SemesterRegistrationRoute = router;

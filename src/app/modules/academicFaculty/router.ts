import { Router } from "express";
import { AcademicFacultyController } from "./controller";

const router = Router();

router.post(
  "/create-academic-faculty",
  AcademicFacultyController.createAcademicFaculty
);
router.get("/", AcademicFacultyController.getAllAcademicFaculty);
router.get("/:id", AcademicFacultyController.getSingleAcademicFaculty);
router.patch("/:id", AcademicFacultyController.updateAcademicFaculty);
router.delete("/:id", AcademicFacultyController.deleteAcademicFaculty);

export const AcademicFacultyRoute = router;

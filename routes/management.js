import express from "express";
import { getAdmin, getUserPerformance } from "./../controllers/management.js";

const router = express.Router();

router.get("/admins", getAdmin);
router.get("/perfomance:id", getUserPerformance);

export default router;

import { Router } from "express";
import { getData, postData, sendForm } from "../controllers/mainController.js";

const router = Router();

router.get("/airtabledata", getData);
router.post("/postuser", postData);
router.post("/form", sendForm);
export default router;

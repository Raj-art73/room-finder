import express from "express";
import { addKhalti, verifyTransaction } from "../Controller/khaltiController"; 

const router = express.Router();

router.post("/initiate", addKhalti);
router.post("/verify", verifyTransaction);

export default router;

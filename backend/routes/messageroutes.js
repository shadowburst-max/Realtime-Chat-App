import express from "express";
import protectRoutes from "../middlewares/protectRoutes.js";
import {sendMessage, getMessages} from "../controllers/messagecontrollers.js";
const router = express.Router();

router.post("/send/:id", protectRoutes, sendMessage); //:id placeholder for dynamic values // protectRoute as a middleware
router.get("/:id", protectRoutes, getMessages);

export default router;

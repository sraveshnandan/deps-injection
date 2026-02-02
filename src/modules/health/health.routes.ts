import { Router } from "express";
import { healthController } from "./health.controller";

 const router =Router();

router.route("/health").get(healthController.getHealth);

 export { router as healthRouter };
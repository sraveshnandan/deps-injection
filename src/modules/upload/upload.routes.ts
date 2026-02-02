import { Router } from "express";
import { UploadController } from "./upload.controller";
import { UploadService } from "./upload.service";

const router = Router();

const uploadservice = new UploadService("uploaderDependency");
const uploaderController = new UploadController(uploadservice);

router.route("/upload").post(uploaderController.uploadFile);

export { router as uploadRouter };
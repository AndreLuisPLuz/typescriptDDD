import { Router } from "express";
import { createMemberController } from "../controllers/member.controller";

const memberRouter = Router();

memberRouter.post("", createMemberController);

export default memberRouter;
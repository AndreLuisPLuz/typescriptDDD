import { Router } from "express";
import { createMemberController } from "../controllers/member.controller";

const memberRouter = Router();

memberRouter.post("/member", createMemberController);

export default memberRouter;
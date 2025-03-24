import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser.js";

const eventRouter = Router();

eventRouter.get("/events", verifyUser, (req, res) => {
res.send(`Welcome to my event`);
});

export default eventRouter;

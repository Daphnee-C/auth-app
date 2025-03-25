import { Router } from "express";
import { verifyUser } from "../middleware/verifyUser.js";

const eventsRouter = Router();

eventsRouter.get("/events", verifyUser, (req, res) => {
res.send(`Welcome to my event`);
});

export default eventsRouter;

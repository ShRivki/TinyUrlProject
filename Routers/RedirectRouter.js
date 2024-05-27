import express from "express";
import RedirectController from "../Controllers/RedirectController.js";

const RedirectRouter = express.Router();

RedirectRouter.get("/:id", RedirectController.redirect);


export default RedirectRouter;
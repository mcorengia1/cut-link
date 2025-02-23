import { Router } from "express";
import { UrlController } from "../controllers/url.js";

export const urlRouter = Router()

urlRouter.post('/', UrlController.shortenURL)
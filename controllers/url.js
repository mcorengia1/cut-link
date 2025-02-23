import { UrlModel } from "../models/local/url.js";
import { UrlSchema } from "../schemas/url.js";

export class UrlController {

    static async shortenURL(req, res) {

        const validationResult = UrlSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).send({
                error: validationResult.error.errors
            });
        }

        const { url } = validationResult.data;

        const dbURL = await UrlModel.getByURL(url) ?? await UrlModel.create(url);

        return res.send(dbURL);
    }
}
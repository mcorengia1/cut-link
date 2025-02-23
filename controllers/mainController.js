export class MainController {
    static async resolveUrl(req, res) {
        const { id } = req.params;

        const dbURL = await UrlModel.getById(id);

        if (!dbURL) {
            return res.status(404).send({
                error: 'URL not found'
            });
        }

        return res.redirect(dbURL.url);
    }
}
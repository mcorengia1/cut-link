import URLsJSON from '../../data/urls.json' with  {type: 'json'}
import crypto from 'node:crypto'

export class UrlModel {
    static async getById(id) {
        const URLIndex = URLsJSON.findIndex(url => url.id === id);

        if (URLIndex === -1) {
            return null

        } else {
            return URLsJSON[URLIndex]
        }
    }

    static async getByURL(inputURL) {
        const URLIndex = URLsJSON.findIndex(url => url.url === inputURL);

        if (URLIndex === -1) {
            return null

        } else {
            return URLsJSON[URLIndex]
        }
    }

    static async create(url) {
        const id = crypto.randomBytes(4).toString('hex');

        const newURL = {
            id,
            url
        }

        URLsJSON.push(newURL)

        return newURL
    }
}
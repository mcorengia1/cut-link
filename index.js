import express from 'express';
import cors from 'cors';
import { urlRouter } from './routes/url.js';
import { MainController } from './controllers/mainController.js';

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(cors())

app.use('/url', urlRouter)
app.get('/:id', MainController.resolveUrl);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})


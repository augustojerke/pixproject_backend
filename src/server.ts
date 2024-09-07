import express, {Request, Response} from 'express';
import { router } from './routes';

const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(3333, () => {
    console.log("Server On - Porta: 3333");
})
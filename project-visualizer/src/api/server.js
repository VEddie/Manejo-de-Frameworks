import express from 'express';
import path from 'path';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:5173'
};

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.json({ message: 'This is the folder data' });
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
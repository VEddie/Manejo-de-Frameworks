import express from 'express';
import fs from 'fs';
import cors from 'cors';
import recursive from 'recursive-readdir';

const app = express();
const port = 5000;

const corsOptions = {
    origin: 'http://localhost:5173'
};

const ROOT = process.cwd().replace(`\\src\\api`, `\\public\\`);

app.use(cors(corsOptions))

app.get('/folders', (req, res) => {
    fs.readdir(ROOT, (err, files) => {
        res.send(files);
    });
});

app.get('/folders/:folderName', (req, res) => {
    const { folderName } = req.params;

    recursive(ROOT + folderName, (err, files) => {
        res.send(files);
    });
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
})
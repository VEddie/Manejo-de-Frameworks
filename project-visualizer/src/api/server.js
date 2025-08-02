import express from 'express';
import fs from 'fs';
import cors from 'cors';
import recursive from 'recursive-readdir';

const app = express();
const port = 2000;

const corsOptions = {
    origin: 'http://localhost:5173'
};

const ROOT = process.cwd().replace(`\\src\\api`, `\\public\\`);

app.use(cors(corsOptions));

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
});

app.get('/readContent/:path', (req, res) => {
    const { path } = req.params;

    fs.readFile(path.replaceAll('\\', '\\\\'), 'UTF8', (err, data) => {
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    
});
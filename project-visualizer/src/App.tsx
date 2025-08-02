import { useEffect, useState } from 'react';
import { Container, Grid, GridItem, List, Text } from '@chakra-ui/react';
import axios from 'axios';
import NavBar from './components/NavBar';
import FOLDER_ROOT from './constants/constants';
import Visualizer from './components/Visualizer';

export interface CodeFile {
    code: string;
    language: string;
    title: string;
    path: string;
}

function App() {
    const [folders, setFolders] = useState<string[]>([]);
    const [currentFolder, setCurrentFolder] = useState('');
    const [folderContents, setFolderContents] = useState<string[]>([]);
    const [selectedFile, setSelectedFile] = useState('');
    const [fileData, setFileData] = useState<CodeFile>({} as CodeFile);

    const fetchFileContent = (path: string) => {
        axios.get(`http://localhost:2000/readContent/${encodeURIComponent(path)}`).then((res) => {
            const fileName = path.split('\\').pop();
            const fileExtension = fileName?.split('.').pop();

            // gitignore breaks the CodeVisualizer for the time being.

            if(fileName && fileExtension) {
                if(fileExtension === 'json')
                    setFileData({
                    code: JSON.stringify(res.data),
                    language: fileExtension,
                    title: fileName,
                    path: path
                });

                else 
                    setFileData({
                    code: res.data,
                    language: fileExtension,
                    title: fileName,
                    path: path
                });
            }
                
        });
    };

    useEffect(() => {
        axios.get(FOLDER_ROOT).then((res) => setFolders(res.data));
    }, []);

    return (
        <Container>
            <Grid
                templateColumns='1fr 3fr'
                templateAreas={{
                    base: `"menu" "aside" "main"`,
                    md: `"menu menu" "aside main"`,
                }}
            >
                <GridItem area='menu'>
                    <NavBar
                        folders={folders}
                        onSetFolderContents={(contents: string[]) => setFolderContents(contents)}
                        onSetCurrentFolder={(folder: string) => setCurrentFolder(folder)}
                    />
                </GridItem>

                <GridItem area='aside' bg='coral'>
                    {!currentFolder && <Text>Select a folder from the menu.</Text>}
                    <List.Root>
                        {folderContents.map((file: string, index: number) => (
                            <List.Item
                                key={index}
                                onClick={() => {
                                    setSelectedFile(file);
                                    fetchFileContent(file);
                                }}
                            >
                                {file.split('\\').pop()}
                            </List.Item>
                        ))}
                    </List.Root>
                </GridItem>

                <GridItem area='main' bg='red.400'>
                    {!selectedFile && <Text>Select a file to view it.</Text>}
                    <Visualizer fileData={fileData} />
                </GridItem>
            </Grid>
        </Container>
    );
}

export default App;

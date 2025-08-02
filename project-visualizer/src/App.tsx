import { Button, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

// import getFolders from './api/api';

function App() {
    const ROOT = 'http://localhost:5000/folders/';
    const [folders, setFolders] = useState([]);
    const [currentFolder, setCurrentFolder] = useState('');

    const fetchFolderContents = (folderName: string) => {
        axios.get(ROOT + folderName).then(res => console.log(res));
    };

    useEffect(() => {
        axios.get(ROOT).then((res) => setFolders(res.data));
    }, []);

    return (
        <Container>
            <Grid
                templateColumns='1fr 3fr'
                templateAreas={{
                    base: `"menu" "aside" "main"`,
                    lg: `"menu menu" "aside main"`,
                }}
            >
                <GridItem area='menu' bg='gray.muted'>
                    {<Text>Current folder: {currentFolder}</Text>}
                </GridItem>
                <GridItem area='aside' bg='coral'>
                    {folders.map((folder, index) => (
                        <Button
                            key={index}
                            onClick={() => {
                                fetchFolderContents(folder);
                                setCurrentFolder(folder);
                            }}
                        >
                            {folder}
                        </Button>
                    ))}
                </GridItem>
                <GridItem area='main' bg='royalblue'>
                    
                </GridItem>
            </Grid>
        </Container>
    );
}

export default App;

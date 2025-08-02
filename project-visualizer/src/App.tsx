import { useEffect, useState } from 'react';
import { Container, Grid, GridItem, List, Text } from '@chakra-ui/react';
import axios from 'axios';
import NavBar from './components/NavBar';

function App() {
    const ROOT = 'http://localhost:5000/folders/';

    const [folders, setFolders] = useState<string[]>([]);
    const [currentFolder, setCurrentFolder] = useState('');
    const [folderContents, setFolderContents] = useState<string[]>([]);

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
                                    console.log(file);
                                }}
                            >
                                {file.split('\\').pop()}
                            </List.Item>
                        ))}
                    </List.Root>
                </GridItem>

                <GridItem area='main' bg='firebrick'></GridItem>
            </Grid>
        </Container>
    );
}

export default App;

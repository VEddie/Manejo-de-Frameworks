import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useEffect } from 'react';
import getFolders from './api/api';

function App() {
    useEffect(() => {
        getFolders();
    }, []);


    return (
        <Container>
            <Grid 
                templateColumns='1fr 3fr'
                templateAreas={{
                    base: `"menu" "aside" "main"`,
                    lg: `"menu menu" "aside main"`
                }}
            >
                <GridItem area='menu' bg='gray.muted'>
                    NavBar
                </GridItem>
                <GridItem area='aside' bg='coral'>
                    Aside
                </GridItem>
                <GridItem area='main' bg='royalblue'>
                    Main
                </GridItem>
            </Grid>
        </Container>
    );
}

export default App;

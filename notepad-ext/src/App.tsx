import { Container, Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react';
import NoteField from './components/NoteField';
import FormatOptions from './components/FormatOptions';
import { useEffect, useState } from 'react';
import NoteMenu from './components/NoteMenu';

function App() {
    const [selectedText, setSelectedText] = useState<string>();
    // This state needs to be shared across components for highlighting, use React Context.

    useEffect(() => {
        document.addEventListener('selectionchange', () => {
            setSelectedText(document?.getSelection()?.toString());
        });
    }, []);

    return (
        <Container fluid>
            <Grid
                templateAreas={{
                    base: `"menu" "text"`,
                    lg: `"menu menu" "text list"`,
                }}
            >
                <GridItem area='menu' bg='coral'>
                    <NoteMenu />
                </GridItem>

                <GridItem area='text' bg='gold' flexGrow='1'>
                    Text area
                </GridItem>

                <GridItem area='list' bg='dodgerblue' hideBelow='lg'>
                    Notes List
                </GridItem>
            </Grid>
        </Container>

        // To do later: Add basic API to save users & notes.
        // Allow text files to be loaded into the app.
    );
}

export default App;

// Needs a container for the UI.
// Needs a character limit.
// Add an offcanvas to view notes (?)

import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import NoteMenu from './components/NoteMenu';
import NoteFormats from './components/NoteFormats';
import NoteField from './components/NoteField';

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

                <GridItem area='text' bg='gold'>
                    <NoteFormats />
                    <NoteField />
                </GridItem>

                <GridItem area='list' bg='dodgerblue'>
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

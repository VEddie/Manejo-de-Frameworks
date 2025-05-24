import { Container, Grid, GridItem } from '@chakra-ui/react';
import { useState } from 'react';
import NoteMenu from './components/NoteMenu';
import NoteField from './components/NoteField';

interface Note {
    noteId: number;
    userId: number;
    title: string;
    content: string;
}

function App() {    
    const [note, setNote] = useState<Note>({ noteId: 0, userId: 0, title: 'Untitled', content: '' });

    return (
        <Container fluid>
            <Grid
                templateAreas={{
                    base: `"menu" "text" "list"`,
                    lg: `"menu menu" "text list"`,
                }}
            >
                <GridItem area='menu' bg='coral'>
                    <NoteMenu />
                </GridItem>

                <GridItem area='text' bg='gold'>
                    <NoteField/>
                </GridItem>

                <GridItem area='list' bg='dodgerblue' width={400}>
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

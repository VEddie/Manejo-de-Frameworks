import { useState } from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Note } from './interfaces/Note';
import NoteMenu from './components/NoteMenu';
import NoteField from './components/NoteField';

function App() {
    const [note, setNote] = useState<Note>({
        noteId: 0,
        userId: 0,
        title: 'Test Note',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellendus?',
    });

    // Add custom hook for fetching notes once the main app works.

    return (
        <Container fluid>
            <Grid
                templateAreas={{
                    base: `"menu" "text" "list"`,
                    lg: `"menu menu" "text list"`,
                }}
            >
                <GridItem area='menu' bg='coral'>
                    <NoteMenu title={note.title} onSetNote={(newNote: Note) => setNote(newNote)} />
                </GridItem>

                <GridItem area='text' bg='gold'>
                    <NoteField
                        note={note}
                        onSetContent={(newContent: string) =>
                            setNote({ ...note, content: newContent })
                        }
                    />
                </GridItem>

                <GridItem area='list' bg='dodgerblue' width={400}></GridItem>
            </Grid>
        </Container>

        // To do later: Add basic API to save users & notes.
        // Allow text files to be loaded into the app.
    );
}

export default App;

// Needs a character limit.
// Add an offcanvas to view notes (?)

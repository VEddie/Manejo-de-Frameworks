import { useState } from 'react';
import { Container, Grid, GridItem, SimpleGrid ,Text} from '@chakra-ui/react';
import { Note } from './interfaces/Note';
import NoteMenu from './components/NoteMenu';
import NoteField from './components/NoteField';
// import NoteCard from './components/NoteCard';

function App() {
    const [note, setNote] = useState<Note>({
        noteId: 0,
        userId: 0,
        title: 'Default title',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellendus?',
    });

    // const [userNoteList, setUserNoteList] = useState<Note[]>([
    //     { noteId: 1, userId: 1, title: 'Test Note 1', content: 'Test' },
    //     { noteId: 2, userId: 1, title: 'Test Note 2', content: 'Test' },
    //     { noteId: 3, userId: 1, title: 'Test Note 3', content: 'Test' },
    //     { noteId: 4, userId: 1, title: 'Test Note 4', content: 'Test' },
    // ]);

    // Add custom hook for fetching notes once the main app works.

    return (
        <Container fluid>
            <Grid
                templateColumns="1fr"
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

                <GridItem area='list' bg='dodgerblue'>
                    <SimpleGrid columns={2} margin={1} gap={1}>
                        <Text textStyle='sm'>
                            There are no saved notes...
                        </Text>
                        {/* {userNoteList.map((userNote) => (
                            <NoteCard key={userNote.noteId} note={userNote} />
                        ))} */}
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Container>

        // To do later: Add basic API to save users & notes.
        // Allow text files to be loaded into the app.
    );
}

export default App;

// Needs a character limit.
// Add an offcanvas to view notes (?)

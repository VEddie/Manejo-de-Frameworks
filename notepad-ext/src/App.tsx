import { useState } from 'react';
import { Container, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';
import { Note } from './interfaces/Note';
import NoteMenu from './components/NoteMenu';
import NoteField from './components/NoteField';
import NoteCard from './components/NoteCard';
import FileTest from './components/FileTest';

// TO DO:
// Fix "save" option so it correctly updates based on note id.
// Add title prompt when saving a new note.
// Add delete function.
// Allow text files to be loaded into the app.
// Needs a 500 character limit
// Add basic API to save users & notes.
// Add custom hook for fetching notes once the main app works.
// Add an offcanvas to view notes (?)

function App() {
    const [note, setNote] = useState<Note>({
        id: 1,
        userId: 0,
        title: 'Default title',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellendus?',
    });

    const [userNoteList, setUserNoteList] = useState<Note[]>([
        { id: 1, userId: 1, title: 'Test Note 1', content: 'Test test test test test test test test test test test test' },
        { id: 2, userId: 1, title: 'Test Note 2', content: 'Test test test test test test test test test test test test' },
        { id: 3, userId: 1, title: 'Test Note 3', content: 'Test test test test test test test test test test test test' }
    ]);

    return (
        <Container fluid>
            <Grid
                templateColumns='1fr'
                templateAreas={{
                    base: `"menu" "text" "list"`,
                    lg: `"menu menu" "text list"`,
                }}
            >
                <GridItem area='menu' bg='gray.muted'>
                    <NoteMenu 
                        note={note} 
                        onSetNote={(newNote: Note) => setNote(newNote)} 
                        onSetUserNote={(newNote: Note) => setUserNoteList([...userNoteList, newNote])} />
                </GridItem>

                {/* Fix note prop duplication. */}

                <GridItem area='text' bg='gray.emphasized' height='80vh'>
                    <NoteField
                        note={note}
                        onSetContent={(newContent: string) =>
                            setNote({ ...note, content: newContent })
                        }
                    />
                </GridItem>

                <GridItem area='list' bg='blue.emphasized' height='80vh' overflow='auto'>
                    <SimpleGrid columns={2} margin={2} gap={2}>
                        {/* <Text textStyle='sm'>
                            There are no saved notes...
                        </Text> */}
                        {userNoteList.map((userNote) => (
                            <NoteCard key={userNote.id} note={userNote} />
                        ))}
                    </SimpleGrid>
                </GridItem>
            </Grid>

            <FileTest/>
        </Container>


        
    );
}

export default App;

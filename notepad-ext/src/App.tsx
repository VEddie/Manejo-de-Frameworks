import { useState } from 'react';
import { Container, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import { Note } from './interfaces/Note';
import NoteMenu from './components/NoteMenu';
import NoteField from './components/NoteField';
import NoteCard from './components/NoteCard';

// TO DO:
// Add basic API to save users & notes.
// Add custom hook for fetching notes once the main app works.

function App() {
    const [currentNote, setCurrentNote] = useState<Note>({
        id: 4,
        userId: 0,
        title: '',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, repellendus?',
    });

    const [savedNotes, setSavedNotes] = useState<Note[]>([
        {
            id: 1,
            userId: 1,
            title: 'Test Note 1',
            content: 'First note',
            editable: true,
        },
        {
            id: 2,
            userId: 1,
            title: 'Test Note 2',
            content: 'Second note',
            editable: true,
        },
        {
            id: 3,
            userId: 1,
            title: 'Test Note 3',
            content: 'Third note',
            editable: true,
        },
    ]);

    const addNote = (newNote: Note) => setSavedNotes([...savedNotes, newNote]);
    const overwriteNote = (id: number, newTitle: string, newContent: string) =>
        setSavedNotes(
            savedNotes.map((n) =>
                n.id === id ? { ...n, title: newTitle, content: newContent } : n
            )
        );

    const editNote = (note: Note) => setCurrentNote(savedNotes.find((n) => n.id === note.id) || ({} as Note));
    const deleteNote = (note: Note) => setSavedNotes(savedNotes.filter((n) => n.id !== note.id));

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
                        note={currentNote}
                        onSetNote={(newNote: Note) => setCurrentNote(newNote)}
                        onAddNote={(newNote: Note) => addNote(newNote)}
                        onOverwriteNote={overwriteNote}
                        onDeleteNote={(id: number) =>
                            setSavedNotes(savedNotes.filter((n) => id !== n.id))
                        }
                        // Combine Add + Overwrite
                    />
                </GridItem>

                <GridItem area='text' bg='gray.emphasized' height='80vh'>
                    <NoteField
                        note={currentNote}
                        onSetContent={(newContent: string) =>
                            setCurrentNote({ ...currentNote, content: newContent })
                        }
                    />
                </GridItem>

                <GridItem area='list' bg='blue.emphasized' height='80vh' overflow='auto'>
                    <SimpleGrid columns={2} margin={2} gap={2}>
                        {savedNotes.length === 0 && (
                            <Text color='white'>There are no saved notes...</Text>
                        )}

                        {savedNotes.map((userNote) => (
                            <NoteCard
                                key={userNote.id}
                                note={userNote}
                                onEdit={() => editNote(userNote)}
                                onDelete={() => deleteNote(userNote)}
                            />
                        ))}
                    </SimpleGrid>
                </GridItem>
            </Grid>
        </Container>
    );
}

export default App;

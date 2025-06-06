import { useEffect, useState } from 'react';
import { Button, Container, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react';
import NoteMenu from './components/NoteMenu';
import NoteField from './components/NoteField';
import NoteCard from './components/NoteCard';
import Note from './interfaces/Note';
import { getUserNotes, setNewNote, setUserNotes } from './utilities/storageFunctions';
import NoteForm from './components/NoteForm';

// TO DO:
// Add LocalStorage functions.
// Code refactoring on some components.
// Make the UI slightly smaller.
// Display a character counter at the bottom of the text area.
// Reset note when delete is selected from the menu.

function App() {
    const [currentNote, setCurrentNote] = useState<Note>(setNewNote());
    const [savedNotes, setSavedNotes] = useState<Note[]>([]);

    useEffect(() => {
        setSavedNotes(getUserNotes(3))
    }, [])

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
            <NoteForm/>
        </Container>
    );
}

export default App;

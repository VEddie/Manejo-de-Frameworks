import { Text, VStack } from '@chakra-ui/react';
import NoteField from './components/NoteField';
import FormatOptions from './components/FormatOptions';
import { useEffect, useState } from 'react';

function App() {
    const [selectedText, setSelectedText] = useState<string>();
    // This state needs to be shared across components for highlighting, use React Context.

    useEffect(() => {
        document.addEventListener('selectionchange', () => {
            setSelectedText((document?.getSelection()?.toString()));
        });

    }, []);

    return (
        // Needs a container for the UI.
        // Needs a character limit.
        // Add an offcanvas to view notes (?)
        <VStack>
            <FormatOptions />
            <NoteField />
            <Text>Currently highlighted: {selectedText}</Text>
        </VStack>

        // To do later: Add basic API to save users & notes.
        // Allow text files to be loaded into the app.
    );
}

export default App;

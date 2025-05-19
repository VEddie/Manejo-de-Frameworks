import { Text, VStack } from '@chakra-ui/react';
import NoteField from './components/NoteField';
import FormatOptions from './components/FormatOptions';
import { useEffect, useState } from 'react';

function App() {
    const [selectedText, setSelectedText] = useState<string>();

    useEffect(() => {
        document.addEventListener('selectionchange', () => {
            setSelectedText((document?.getSelection()?.toString()));
        });

    }, []);

    return (
        <VStack>
            <FormatOptions />
            <NoteField />
            <Text>Currently highlighted: {selectedText}</Text>
        </VStack>
    );
}

export default App;

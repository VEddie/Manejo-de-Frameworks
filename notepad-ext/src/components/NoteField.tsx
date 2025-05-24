import { useEffect, useRef, useState } from 'react';
import { Container, Textarea } from '@chakra-ui/react';
import NoteFormats from './NoteFormats';

const NoteField = () => {
    const noteField = useRef<HTMLTextAreaElement>(null);
    const [selectedText, setSelectedText] = useState<string>('');

    useEffect(() => {
        if(noteField.current) {
            noteField.current.addEventListener('selectionchange', () => {
                setSelectedText(document.getSelection()?.toString() || '');
                // To fix later.
            });
        }
    }, []);

    return (
        <Container padding={0}>
            <NoteFormats noteField={noteField.current?.value || ''} selectedText={selectedText} />
            <Textarea
                ref={noteField}
                size='lg'
                mt='2'
                cols={50}
                rows={25}
                placeholder='Start writing your new note...'
                defaultValue={'Hello World'}
            ></Textarea>
        </Container>
    );
};

export default NoteField;

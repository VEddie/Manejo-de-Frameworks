import { useEffect, useRef, useState } from 'react';
import { Container, Textarea } from '@chakra-ui/react';
import Note from '@/interfaces/Note';
import NoteFormats from './NoteFormats';

interface Props {
    note: Note;
    onSetContent: (newContent: string) => void;
}

const NoteField = ({ note, onSetContent }: Props) => {
    const noteField = useRef<HTMLTextAreaElement>(null);
    const [selectedText, setSelectedText] = useState<string>('');

    useEffect(() => {
        if (noteField.current) {
            noteField.current.addEventListener('selectionchange', () => {
                setSelectedText(document.getSelection()?.toString() || '');
                // To fix later.
            });
        }
    }, []);

    return (
        <Container padding={0}>
            <NoteFormats
                currentContent={noteField.current?.value || ''}
                selectedText={selectedText}
                onSetContent={(newContent) => onSetContent(newContent)}
            />
            <Textarea
                ref={noteField}
                color='white'
                colorPalette='blue'
                maxLength={1000}
                size='lg'
                mt='2'
                cols={50}
                rows={28}
                placeholder='Start writing your new note...'
                value={note.content}
                onChange={e => onSetContent(e.target.value)}
            ></Textarea>
        </Container>
    );
};

export default NoteField;

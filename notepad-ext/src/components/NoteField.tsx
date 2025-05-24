import { Container, Textarea } from '@chakra-ui/react';
import NoteFormats from './NoteFormats';
import { useRef } from 'react';

interface Props {
    selectedText: string;
}

const NoteField = ({ selectedText }: Props) => {
    const noteField = useRef<HTMLTextAreaElement>(null);

    return (
        <Container padding={0}>
            <NoteFormats />
            <Textarea
                ref={noteField}
                size='lg'
                mt='2'
                cols={50}
                rows={25}
                placeholder='Start writing your new note...'
            ></Textarea>
        </Container>
    );
};

export default NoteField;

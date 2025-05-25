import { Note } from '@/interfaces/Note';
import { Button, Card } from '@chakra-ui/react';

interface Props {
    note: Note;
}

const NoteCard = ({ note }: Props) => {
     const cropBodyText = (text: string) => {
        if(text.length > 50)
            return `${text.substring(0, 50)}...`
        return text;
    }

    return (
        <Card.Root size='sm' width={160} height={250}>
            <Card.Header>{note.title}</Card.Header>
            <Card.Body>{cropBodyText(note.content)}</Card.Body>
            <Card.Footer justifyContent='center'>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </Card.Footer>
        </Card.Root>
    );
};

export default NoteCard;

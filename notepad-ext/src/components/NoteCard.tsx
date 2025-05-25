import { Note } from "@/interfaces/Note"
import { Button, Card } from "@chakra-ui/react";

interface Props {
    note: Note;
}

const NoteCard = ({ note }: Props) => {
  return (
    <Card.Root size='sm'>
        <Card.Header>{note.title}</Card.Header>
        <Card.Body>{note.content}</Card.Body>
        <Card.Footer justifyContent='center'>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </Card.Footer>
    </Card.Root>
  )
}

export default NoteCard
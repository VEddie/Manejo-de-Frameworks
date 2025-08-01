import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import { Prose } from './ui/prose';
import Note from '@/interfaces/Note';
import processTextToHTML from '../utilities/htmlTagFunctions';

interface Props {
    note: Note;
}

const NoteDialog = ({ note }: Props) => {
    const html = String.raw;
    const content = html`
        ${processTextToHTML(note.content)}
        `;

    return (
        <Dialog.Root scrollBehavior='inside'>
            <Dialog.Trigger asChild>
                <Button
                    size='2xs'
                    variant='plain'
                    padding={0}
                    fontWeight={400}
                    _hover={{ cursor: 'default' }}
                    flexGrow={1}
                    justifyContent={'flex-start'}
                >
                    View
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content color={'white'}>
                        <Dialog.Header>
                            <Dialog.Title>{note.title}</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Prose dangerouslySetInnerHTML={{ __html: content }} />
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant='outline'>Cancel</Button>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size='sm' />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    );
};

export default NoteDialog;

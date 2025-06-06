import { Note } from '@/interfaces/Note';
import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';

interface Props {
    note: Note;
}

const NoteDialog = () => {
    return (
        <Dialog.Root scrollBehavior='inside'>
            <Dialog.Trigger asChild>
                <Button variant='outline' size='sm'>
                    View
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content color={'white'}>
                        <Dialog.Header>
                            <Dialog.Title>Dialog Title</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                                repellendus?Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                Dolorem, repellendus? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem, repellendus? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. 
                                
                                Dolorem, repellendus? Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. Dolorem, repellendus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                
                                Dolorem, repellendus? Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Dolorem, repellendus? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem, repellendus? Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Dolorem, repellendus? Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. 
                                
                                Dolorem, repellendus?
                                Lorem ipsum dolor sit amet consectetur adipisicing e Lorem ipsum
                                dolor sit amet consectetur adipisicing elit. Dolorem, repellendus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
                                repellendus?
                            </p>
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

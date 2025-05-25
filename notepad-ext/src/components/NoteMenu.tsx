import { Button, HStack, Menu, Portal, Text } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import { Note } from '@/interfaces/Note';

interface Props {
    note: Note;
    onSetNote: (newNote: Note) => void;
    onSetUserNote: (newNote: Note) => void;
}

const NoteMenu = ({ note, onSetNote, onSetUserNote }: Props) => {
    return (
        <HStack justifyContent='space-between'>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant='outline'>File</Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.ItemGroup>
                                <Menu.Item
                                    value='new'
                                    onClick={() => {
                                        onSetNote({
                                            id: 0,
                                            userId: 0,
                                            content: '',
                                            title: 'Untitled',
                                        });
                                    }}
                                >
                                    New
                                </Menu.Item>
                                <Menu.Item
                                    value='save'
                                    onClick={() => {
                                        onSetUserNote(note);
                                    }}
                                >
                                    Save
                                </Menu.Item>
                                <Menu.Item value='load'>Load .txt</Menu.Item>
                                <Menu.Item
                                    value='delete'
                                    color='fg.error'
                                    _hover={{ bg: 'bg.error', color: 'fg.error' }}
                                >
                                    Delete
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
            <Text margin='auto'>Unregistered User - {note.title}</Text>
            <Button colorPalette='red'>
                <ImCross />
            </Button>
        </HStack>
    );
};

export default NoteMenu;

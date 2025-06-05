import {
    Button,
    FileUpload,
    FileUploadItemContent,
    HStack,
    Menu,
    Portal,
    Text,
    useFileUpload,
} from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import { Note } from '@/interfaces/Note';

interface Props {
    note: Note;
    onSetNote: (newNote: Note) => void;
    onSetUserNote: (id: number, newTitle: string) => void;
}

const NoteMenu = ({ note, onSetNote, onSetUserNote }: Props) => {
    const fileUpload = useFileUpload();

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
                                        let newTitle = prompt('Enter a title');
                                        if (newTitle?.length) {
                                            onSetNote({ ...note, title: newTitle });
                                            onSetUserNote(note.id, newTitle);
                                        }
                                    }}
                                >
                                    Save
                                </Menu.Item>

                                <Menu.Item value='load' closeOnSelect={false}>
                                    <FileUpload.RootProvider value={fileUpload}>
                                        <FileUpload.HiddenInput
                                            onChange={() => {
                                                let fr = new FileReader();
                                                fr.onload = () => {
                                                    const textContent = fr.result?.toString();
                                                    if(textContent)
                                                        onSetNote({ ...note, content: textContent })
                                                };

                                                fr.readAsText(fileUpload.acceptedFiles[0], 'utf-8');
                                            }}
                                        />
                                        <FileUpload.Trigger asChild>
                                            <Button
                                                size='2xs'
                                                variant='plain'
                                                padding={0}
                                                fontWeight={400}
                                                _hover={{ cursor: 'default' }}
                                            >
                                                Load .txt
                                            </Button>
                                        </FileUpload.Trigger>
                                        <FileUploadItemContent />
                                    </FileUpload.RootProvider>
                                </Menu.Item>

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
            <Text margin='auto' color='white'>
                Unregistered User - {note.title === '' ? 'Untitled' : note.title}
            </Text>
            <Button colorPalette='red'>
                <ImCross />
            </Button>
        </HStack>
    );
};

export default NoteMenu;

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
import { useNavigate } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import Note from '@/interfaces/Note';
import User from '../interfaces/User';
import NoteDialog from './NoteDialog';
import { deleteCurrentUser, getCurrentUser, getNextNoteId, saveNote } from '../utilities/storageFunctions';

interface Props {
    note: Note;
    onSetNote: (newNote: Note) => void;
    onAddNote: (newNote: Note) => void;
    onOverwriteNote: (id: number, newTitle: string, newContent: string) => void;
    onDeleteNote: (id: number) => void;
}

const NoteMenu = ({ note, onAddNote, onSetNote, onOverwriteNote }: Props) => {
    const fileUpload = useFileUpload();
    const navigate = useNavigate();
    const user: User = getCurrentUser()

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
                                        if (note.editable) {
                                            onOverwriteNote(note.id, note.title, note.content);
                                            saveNote({...note })
                                           
                                        } 
                                        
                                        else {
                                            let newTitle =
                                                prompt('Enter a title', note.title) || 'Untitled';
                                            onAddNote({ ...note, title: newTitle, editable: true });
                                            onSetNote({ ...note, title: newTitle, editable: true });
                                            saveNote({...note, id: getNextNoteId(), title: newTitle, userId: getCurrentUser().id, editable: true })
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
                                                    if (textContent)
                                                        onSetNote({
                                                            ...note,
                                                            content: textContent,
                                                        });
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

                                <Menu.Item value='view' closeOnSelect={false}>
                                    <NoteDialog note={note} />
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
            <Text margin='auto' color='white'>
                {user.username} - {note.title === '' ? 'Untitled' : note.title}
            </Text>
            <Button
                onClick={() => {
                    deleteCurrentUser();
                    navigate('/');
                }}
                colorPalette='red'
            >
                <ImCross />
            </Button>
        </HStack>
    );
};

export default NoteMenu;

import { Button, HStack, Menu, Portal, Text } from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';

interface Props {
    title: string;
}

const NoteMenu = ({ title }: Props) => {
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
                                <Menu.Item value='bold'>New</Menu.Item>
                                <Menu.Item value='underline'>Save</Menu.Item>
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
            <Text margin='auto'>
                Unregistered User - {title}
            </Text>
            <Button colorPalette='red'>
                <ImCross />
            </Button>
        </HStack>
    );
};

export default NoteMenu;

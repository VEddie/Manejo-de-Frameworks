import { Button, HStack, Menu, Portal } from '@chakra-ui/react';

const NoteMenu = () => {
    return (
        <HStack>
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
        </HStack>
    );
};

export default NoteMenu;

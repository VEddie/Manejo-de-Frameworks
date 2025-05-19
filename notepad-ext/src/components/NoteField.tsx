import { Textarea } from '@chakra-ui/react';

const NoteField = () => {
    return (
        <Textarea
            size='lg'
            placeholder='Start writing your new note...'
            defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, vel.'
        ></Textarea>
    );
};

export default NoteField;

import { Textarea } from '@chakra-ui/react';

const NoteField = () => {
    return (
        <Textarea
            size='lg'
            placeholder='Start writing your new note...'
            defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita, aspernatur labore natus tempore aperiam minima quaerat consequatur.'
        ></Textarea>
        
    );
};

export default NoteField;

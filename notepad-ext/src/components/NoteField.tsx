import { Textarea } from '@chakra-ui/react';

const NoteField = () => {
    return (
        <Textarea
            size='lg'
            placeholder='Start writing your new note...'
            defaultValue='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum expedita, aspernatur labore natus tempore aperiam minima quaerat consequatur quae iure iste suscipit eius ullam, praesentium exercitationem nihil officiis illum in molestias reprehenderit. Quia, inventore nam dolores pariatur praesentium omnis in.'
        ></Textarea>
        
    );
};

export default NoteField;

import { Button, ButtonGroup } from '@chakra-ui/react';
import { emboldenText, itacilizeText, underlineText } from '../utilities/formattingFunctions';

interface Props {
    currentContent: string;
    selectedText: string;
    onSetContent: (newContent: string) => void;
}

const NoteFormats = ({ currentContent, selectedText, onSetContent }: Props) => {
    return (
        <ButtonGroup gapX={2} size='sm' colorPalette='green' mt='2'>
            <Button onClick={() => onSetContent(emboldenText(currentContent, selectedText))}>
                B
            </Button>

            <Button onClick={() => console.log(itacilizeText(currentContent, selectedText))}>
                I
            </Button>
            <Button onClick={() => console.log(underlineText(currentContent, selectedText))}>
                U
            </Button>
        </ButtonGroup>
    );
};

export default NoteFormats;

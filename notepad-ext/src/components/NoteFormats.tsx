import { Button, ButtonGroup } from '@chakra-ui/react';
import { emboldenText, itacilizeText, underlineText } from '../utilities/formattingFunctions';

interface Props {
    currentContent: string;
    selectedText: string;
    onSetContent: (newContent: string) => void;
}

const NoteFormats = ({ currentContent, selectedText, onSetContent }: Props) => {
    return (
        <ButtonGroup gapX={2} size='sm' colorPalette={'blue'} mt='2'>
            <Button
                onClick={() => {
                    if (selectedText) onSetContent(emboldenText(currentContent, selectedText));
                }}
            >
                B
            </Button>

            <Button
                onClick={() => {
                    if (selectedText) onSetContent(itacilizeText(currentContent, selectedText));
                }}
            >
                I
            </Button>
            <Button
                onClick={() => {
                    if (selectedText) onSetContent(underlineText(currentContent, selectedText));
                }}
            >
                U
            </Button>
        </ButtonGroup>
    );
};

export default NoteFormats;

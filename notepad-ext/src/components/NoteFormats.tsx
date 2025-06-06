import { Button, ButtonGroup } from '@chakra-ui/react';
import { emboldenText, itacilizeText, strikeText, underlineText } from '../utilities/formattingFunctions';

interface Props {
    currentContent: string;
    selectedText: string;
    onSetContent: (newContent: string) => void;
}

const NoteFormats = ({ currentContent, selectedText, onSetContent }: Props) => {
    return (
        <ButtonGroup gapX={2} size='sm' colorPalette={'blue'} mt='2'>
            <Button
                fontWeight='bold'
                onClick={() => {
                    if (selectedText) onSetContent(emboldenText(currentContent, selectedText));
                }}
            >
                B
            </Button>

            <Button
                fontStyle='italic'
                onClick={() => {
                    if (selectedText) onSetContent(itacilizeText(currentContent, selectedText));
                }}
            >
                I
            </Button>
            <Button
                textDecoration='underline'
                onClick={() => {
                    if (selectedText) onSetContent(underlineText(currentContent, selectedText));
                }}
            >
                U
            </Button>
            <Button
                textDecoration='line-through'
                onClick={() => {
                    if (selectedText) onSetContent(strikeText(currentContent, selectedText));
                }}
            >
                S
            </Button>
        </ButtonGroup>
    );
};

export default NoteFormats;

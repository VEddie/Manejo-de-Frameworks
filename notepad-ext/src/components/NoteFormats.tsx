import { Button, ButtonGroup } from "@chakra-ui/react"
import { emboldenText } from "../utilities/formattingFunctions";

interface Props {
    noteField: string;
    selectedText: string;
}

const NoteFormats = ({ noteField, selectedText }: Props) => {
  return (
    <ButtonGroup gapX={2} size='sm' colorPalette='green' mt='2'>
        <Button 
            onClick={() => {
            console.log(emboldenText(noteField, selectedText))
        }}
        >B</Button>
        <Button>I</Button>
        <Button>U</Button>
    </ButtonGroup>
  )
}

export default NoteFormats;
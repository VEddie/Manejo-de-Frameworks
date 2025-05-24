import { Button, ButtonGroup } from "@chakra-ui/react"

const NoteFormats = () => {
  return (
    <ButtonGroup gapX={2} size='sm' colorPalette='green' mt='2'>
        <Button>B</Button>
        <Button>I</Button>
        <Button>U</Button>
    </ButtonGroup>
  )
}

export default NoteFormats;
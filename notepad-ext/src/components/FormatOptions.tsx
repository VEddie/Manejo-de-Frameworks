import { Button, ButtonGroup } from "@chakra-ui/react"

const FormatOptions = () => {
  return (
    <ButtonGroup gapX={2} size='sm' colorPalette='green'>
        <Button>B</Button>
        <Button>I</Button>
        <Button>U</Button>
    </ButtonGroup>
  )
}

export default FormatOptions
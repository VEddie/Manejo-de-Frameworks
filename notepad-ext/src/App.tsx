import { VStack } from "@chakra-ui/react"
import NoteField from "./components/NoteField"
import FormatOptions from "./components/FormatOptions"

function App() {

  return (
    <VStack>
        <FormatOptions/>
        <NoteField/>
    </VStack>

  )
}

export default App

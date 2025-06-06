import { Flex } from "@chakra-ui/react"
import NoteForm from "./NoteForm"

const LoginPage = () => {
  return (
    <Flex justifySelf='center' alignItems='center' height='100vh'>
        <NoteForm />
    </Flex>
  )
}

export default LoginPage
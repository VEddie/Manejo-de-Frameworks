import { Container, Heading, Text } from "@chakra-ui/react"

const ErrorPage = () => {
  return (
    <Container padding={5}>
        <Heading>404: Page Not Found</Heading>
        <Text>This link does not exist.</Text>
    </Container>
  )
}

export default ErrorPage;
import {Flex, Input, Button, Stack, FormLabel, FormControl} from '@chakra-ui/react'


export default function Home() {
  return (
    <Flex 
      w="100vm" 
      h="100vh" 
      alignItems="center" 
      justify="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDirection="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input 
              name="email"
              id="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input 
              name="password" 
              id="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Button 
          type="submit" 
          marginTop="6" 
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
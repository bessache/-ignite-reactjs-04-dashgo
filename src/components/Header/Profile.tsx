import {Flex, Text, Box, Avatar} from '@chakra-ui/react'

export function Profile(){
    return (
        <Flex
            align="center"
        >
            <Box marginRight="4" textAlign="right">
                <Text> Renato Bessa</Text>
                <Text color="gray.300" fontFamily="small"> 
                    bessache@outlook.com
                </Text>
            </Box>
            <Avatar size="md" name="Renato Bessa" src="https://github.com/bessache.png"/>

        </Flex>

    )
}
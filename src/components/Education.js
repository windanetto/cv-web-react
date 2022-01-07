import { Flex, Text, Box, Spacer } from "@chakra-ui/react"

export const Education = () => {
  return (
    <Flex w='75%' flexDir='column' justifyContent='center' padding='8vh'>
      <Flex w='100%' flexDir='column'>
        <Text fontSize='6xl' fontWeight='bold' mb='3vh'>EDUCATION</Text>
      </Flex>
      <Flex w='100%'>
        <Box fontSize='3xl' fontWeight='bold'>Bachelor of Computer Science</Box>
        <Spacer/>
        <Box fontSize='lg' fontWeight='bold' color='#ce8665' pt={17}>2014 - 2019</Box>
      </Flex>
      <Flex w='100%' flexDir='column'>
        <Text fontSize='2xl' mb='12px' fontWeight='semibold'>Sriwijaya University</Text>
        <Text fontSize='xl'>Informatics Engineering</Text>
        <Text fontSize='xl'>GPA 3.48/4.00 with 149 credits</Text>
      </Flex>
    </Flex>
  )
}

export default Education
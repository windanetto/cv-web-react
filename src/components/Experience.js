import { Box, Flex, List, ListIcon, ListItem, Spacer, Text } from "@chakra-ui/react"
import { FaCheckCircle, FaDesktop, FaMobileAlt } from 'react-icons/fa'

export const Experience = () => {
  return (
    <Flex w='75%' flexDir='column' justifyContent='center' padding='8vh'>
      <Flex w='100%' flexDir='column'>
        <Text fontSize='6xl' fontWeight='bold' mb='3vh'>EXPERIENCE</Text>
      </Flex>
      <Flex w='100%'>
        <Box fontSize='3xl' fontWeight='bold'>Frontend Developer</Box>
        <Spacer/>
        <Box fontSize='lg' fontWeight='bold' color='#ce8665' pt={17}>Oct 2019 - Now</Box>
      </Flex>
      <Flex w='100%'><Text fontSize='2xl' mb='9px'>PT. Kreasi Kode Digital</Text></Flex>
      <Flex w='100%' pl='3vh'>
        <Box w='60%'>
          <Text fontSize='lg' fontWeight='semibold' mb='5px'>Responsibilities:</Text>
          <List spacing={1} pl={15} fontSize='lg'>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='green.500' mb='7px' fontSize='12px' />
              Implementation User Interface (UI)
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='green.500' mb='7px' fontSize='12px' />
              Integration Application Programming Interface (API)
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='green.500' mb='7px' fontSize='12px' />
              Documentation
            </ListItem>
          </List>
        </Box>
        <Box w='40%'>
          <Text fontSize='lg' fontWeight='semibold' mb='5px'>Project:</Text>
          <List spacing={1} pl={15} fontSize='lg'>
            <ListItem>
              <ListIcon as={FaDesktop} color='green.500' mb='7px' fontSize='12px' />
              NYTE CMS (Aug 2021 - Now)
            </ListItem>
            <ListItem>
              <ListIcon as={FaMobileAlt} color='green.500' mb='7px' fontSize='12px' />
              SobatTani App (Jun 2021 - Aug 2021)
            </ListItem>
            <ListItem>
              <ListIcon as={FaDesktop} color='green.500' mb='7px' fontSize='12px' />
              Captive CMS (Apr 2020 - Jun 2021)
            </ListItem>
            <ListItem>
              <ListIcon as={FaDesktop} color='green.500' mb='7px' fontSize='12px' />
              Liniads (May 2020 - Jun 2021)
            </ListItem>
            <ListItem>
              <ListIcon as={FaDesktop} color='green.500' mb='7px' fontSize='12px' />
              Captive Portal (Jun 2020 - Nov 2020)
            </ListItem>
            <ListItem>
              <ListIcon as={FaDesktop} color='green.500' mb='7px' fontSize='12px' />
              AdsPlatform (Nov 2019 - Mar 2020)
            </ListItem>
          </List>
        </Box>
      </Flex>

      <Flex w='100%' mt={5}>
        <Box fontSize='3xl' fontWeight='bold'>IT Intern</Box>
        <Spacer/>
        <Box fontSize='lg' fontWeight='bold' color='#ce8665' pt={17}>Dec 2016 - Jan 2017</Box>
      </Flex>
      <Flex w='100%'>
        <Text fontSize='2xl' mb='9px'>
          PT. Angkasa Pura II (Main Office - Soekarno Hatta International Airport)
        </Text>
      </Flex>
      <Flex w='100%' pl='3vh'>
        <Box w='60%'>
          <Text fontSize='lg' fontWeight='semibold' mb='5px'>Responsibilities:</Text>
          <List spacing={1} pl={15} fontSize='lg'>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='green.500' mb='7px' fontSize='12px' />
              Develop web-based software using PHP with MySql database
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color='green.500' mb='7px' fontSize='12px' />
              Documentation
            </ListItem>
          </List>
        </Box>
        <Box w='40%'>
          <Text fontSize='lg' fontWeight='semibold' mb='5px'>Project:</Text>
          <List spacing={1} pl={15} fontSize='lg'>
            <ListItem>
              <ListIcon as={FaDesktop} color='green.500' mb='7px' fontSize='12px' />
              E-Report
            </ListItem>
          </List>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Experience

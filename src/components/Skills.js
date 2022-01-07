import { Flex, Text, Link } from "@chakra-ui/react";
import { 
  FaAngular, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap,
  FaReact,
  FaPhp,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint
} from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io5'
import { SiCodeigniter } from 'react-icons/si'

export const Skills = () => {
  return (
    <Flex w='75%' flexDir='column' justifyContent='center' padding='8vh'>
      <Flex w='100%' flexDir='column'>
        <Text fontSize='6xl' fontWeight='bold' mb='3vh'>SKILLS</Text>
      </Flex>
      <Flex w='100%'>
        <Text fontSize='3xl' fontWeight='bold'>PROGRAMMING LANGUAGES & TOOLS</Text>
      </Flex>
      <Flex w='100%' flexDir='column' display='inline' mt={30}>
        <FaAngular style={styles.iconSosmed}/> 
        <FaHtml5 style={styles.iconSosmed}/> 
        <FaCss3Alt style={styles.iconSosmed}/> 
        <FaBootstrap style={styles.iconSosmed}/> 
        <IoLogoIonic style={styles.iconSosmed}/> 
        <FaReact style={styles.iconSosmed}/> 
        <FaPhp style={styles.iconSosmed}/> 
        <SiCodeigniter style={styles.iconSosmed}/> 
        <FaFileWord style={styles.iconSosmed}/> 
        <FaFileExcel style={styles.iconSosmed}/> 
        <FaFilePowerpoint style={styles.iconSosmed}/> 
      </Flex>
    </Flex>
  )
}

export default Skills

const styles = {
  iconSosmed: {
    fontSize: '60px',
    display: 'inline',
    marginRight: '5px'
  }
}
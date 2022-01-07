import { Flex, Link, Text } from '@chakra-ui/react';
import { FaCircle, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export const About = () => {
  return (
    <Flex w='75%' flexDir='column' justifyContent='center' padding='8vh'>
      <Flex w='100%' flexDir='column' justifyContent='center'>
        <Text fontSize='6xl' fontWeight='bold'>
          Winda
          <span style={styles.textColor}> Agusthia</span>
        </Text>
        <Text fontSize='3xl' fontWeight='bold'>
          0813-6633-0901 
          <FaCircle style={styles.iconDot}/>
          windaa.nettom@gmail.com
        </Text>
        <Text fontSize='2xl' textAlign='justify'>
          I am a fun and disciplined coworker. Leading a discussion, presenting 
          a report or starting a casual chat with a coworker is not a big deal for me. 
          Thus, I can work well in a team or independently. Completing tasks well and on 
          time is my priority. In 2020, I had successfully developed web- based 
          application and Content Management System (CMS) using Angular Framework 
          along with 7 people in a team.
        </Text>
      </Flex>

      <Flex w='100%' flexDir='column' justifyContent='center' display='inline' mt={30}>
        <Link 
          backgroundColor='#333e2d' 
          display='inline-flex' 
          alignItems='center' 
          justifyContent='center'
          h='3.5rem' w='3.5rem'
          color='#f4f4f4'
          borderRadius='100%'
          marginRight={5}
          href='https://github.com/windanetto'
        >
          <FiGithub style={styles.iconSosmed}/> 
        </Link>

        <Link 
          backgroundColor='#333e2d' 
          display='inline-flex' 
          alignItems='center' 
          justifyContent='center'
          h='3.5rem' w='3.5rem'
          color='#f4f4f4'
          borderRadius='100%'
          marginRight={5}
          href='https://www.linkedin.com/in/winda-agusthia-05589a129/'
        >
          <FaLinkedinIn style={styles.iconSosmed}/> 
        </Link>

        <Link 
          backgroundColor='#333e2d' 
          display='inline-flex' 
          alignItems='center' 
          justifyContent='center'
          h='3.5rem' w='3.5rem'
          color='#f4f4f4'
          borderRadius='100%'
          href='https://www.instagram.com/windanetto/'
        >
          <FaInstagram style={styles.iconSosmed}/>
        </Link>
       
      </Flex>
    </Flex>
  )
}

export default About

const styles = {
  textColor: {
    color: '#ce8665'
  },

  iconDot: {
    fontSize: '12px',
    display: 'inline',
    margin: '5px 15px'
  },

  iconSosmed: {
    fontSize: '25px',
    display: 'inline',
  }
}

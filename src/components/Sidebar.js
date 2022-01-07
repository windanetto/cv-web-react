import { Flex, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import photoProfile from '../img/winda.jpg'
import NavItem from './NavItem'

export const Sidebar = () => {
  return (
    <Flex 
      pos='sticky'
      h='100vh'
      w='25%'
      flexDir='column'
      justifyContent='space-between'
      backgroundColor='#ce8665'
    >
      <Flex 
        h='100vh' 
        align='center' 
        justifyContent='center'
        flexDir='column'
        w='100%'
      >
        <Image  
          borderRadius='full'
          boxSize='200px'
          src={photoProfile}
          alt='WN'
        />

        <NavItem title='About' path='/' />
        <NavItem title='Experience' path='/experience' />
        <NavItem title='Education' path='/education' />
        <NavItem title='Skills' path='/skills' />
      </Flex>
    </Flex>
  )
}

export default Sidebar

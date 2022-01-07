import { Flex, Link, Menu, MenuButton, Text } from "@chakra-ui/react";
import { Link as ReachLink, useLocation } from "react-router-dom";
import React, { useState } from 'react'


export const NavItems = ({ title, path }) => {
  const location = useLocation();
  let active = useState('');

  return (
    <Flex 
      mt={30} 
      flexDir='column' 
      w='100%' 
      alignItems='center'
      id={location.pathname === path ? active = 'active' : active = 'inactive'}
    >
      <Menu placement='right'>
        <Link 
          style={styles.link}
          as={ReachLink}
          to={path}
        >  
          <MenuButton w='100%'>
            <Flex w='100%' flexDir='column'>
              <Text 
                color={active === 'active' ? "#f4f4f4" : '#c1c8cf'} 
                fontSize='2xl' 
                fontWeight='bold'
              >{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItems;

const styles = {
  link: {
    textDecoration: 'none'
  }
};
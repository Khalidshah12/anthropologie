import React from "react";

import { useNavigate } from "react-router-dom";

import {Link} from 'react-router-dom';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";

export default function MyAccount({SignoutHandler}) {
    
  

  return (
    <Menu mt={"5px"}>
      <MenuButton as={Button}  bg={"white"}  _hover={{bg:"white"}}>
        MyAccount
      </MenuButton>
      <MenuList position={"relative"}>
        <MenuGroup position={"absolute"} zIndex={"1000"}>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
           
            <MenuItem onClick= {SignoutHandler}>Sign Out</MenuItem>
           
        
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

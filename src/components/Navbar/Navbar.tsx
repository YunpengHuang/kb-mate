import { Flex } from '@chakra-ui/react';
import React from 'react';
import Searchinput from './Searchinput';

const Navbar:React.FC = () => {
    
    return (
        <Flex bg={"white"} height='44px'>
            <Flex align={"center"}>
                Keyboard temp Navbar/text
            </Flex>
            <Searchinput/>
        </Flex>
    ); 
};
export default Navbar;
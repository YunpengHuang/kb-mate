import { Keyboard } from '@/src/atoms/keyboardatom';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

type HeaderProps = {
   keyboardData: Keyboard 
};

const Header:React.FC<HeaderProps> = ({keyboardData}) => {
    return (
        <Flex direction={"column"} width="100%" height={"230px"} bg="blue.400">
            <Text fontSize={'50px'} color='white'>{keyboardData.id}</Text>
        </Flex>
    )
    
}
export default Header;
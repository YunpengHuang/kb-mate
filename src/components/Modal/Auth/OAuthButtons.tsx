import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';


const OAuthButtons:React.FC = () => {
    return (
        <Flex direction={"column"} width="100%" mb={4}>
            <Image src='/images/googlelogo.png' height={"20px"} mr={2}/>
            <Button variant={"oauth"} mb={2}>
                Continue with google
            </Button>
        </Flex>
    )
    
}
export default OAuthButtons;
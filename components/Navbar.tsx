import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress} from "@thirdweb-dev/react";
import { error } from "console";
import NextLink from 'next/link';

export function Navbar() {
    const address = useAddress(); //react hook from thirdweb

    return (
        //Tạo box thanh điều hướng 
        <Box m={"auto"} py={"10px"}px={"150px"} boxShadow="0px 16px 13px rgba(141, 141, 141, 0.17)">
            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href='/'>
                    <Heading style={{
                        background: 'linear-gradient(89.89deg, #FF56F6 2.33%, #42A6E3 101.4%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>NFT Market Place</Heading>
                </Link>
                <Flex direction={"row"}>
                    <Link as={NextLink} href='/buy' mx={2.5}>
                        <Text textColor={"#AAB6C1FF"}  fontSize={"20px"} px={"15px"}>Buy</Text>
                    </Link>
                    <Link as={NextLink} href='/sell' mx={2.5}>
                        <Text textColor={"#AAB6C1FF"} fontSize={"20px"} px={"15px"}>Sell</Text>
                    </Link>
                    <Link as={NextLink} href='/mint' mx={2.5}>
                        <Text textColor={"#AAB6C1FF"} fontSize={"20px"} px={"15px"}>Mint</Text>
                    </Link>
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet/>
                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                            <Avatar src='https://bit.ly/broken-link' ml={"20px"}/>
                        </Link>
                    )}
                </Flex>
            </Flex>
        </Box>
    )
};
import NextLink from 'next/link'
import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Image, Stack, Text, Box} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Container maxW={"1200px"} bg = "blue">
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"} float={"left"} width={"50%"}>
        <Stack spacing={4} align={"center"} >
          <Heading fontSize='52'>Beautiful <span style={{
                      background: 'linear-gradient(89.89deg, #FF56F6 2.33%, #42A6E3 101.4%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>NFTs</span> for everyone</Heading>
          <Text py="30px" fontSize={"20"} opacity={0.7}>
            This NFT marketplace is a digital platform that facilitates the buying, selling, and auctioning of unique digital assets 
            known as NFTs.  
          </Text>
          <Button color={"white"} 
            sx={{
              background: 'linear-gradient(89.89deg, #42A6E3 2.33%, #FF56F6 101.4%)',
              WebkitBackdropFilter: 'blur(106.124px)',
              backdropFilter: 'blur(106.124px)',
              borderRadius: '1.21092px',
              fontSize: '19.8983px',
              lineHeight: '25px',
              padding: '20px 62px 19px 67px',
              WebkitClipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 40px) 100%, 0 100%, 0 20px)',
              clipPath: 'polygon(40px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 40px) 100%, 0 100%, 0 20px)',
              marginRight: '11cm',
              textAlign: 'left',
            }}
            as={NextLink}
            href="/buy"
            >
              Explore
          </Button>
        </Stack>
      </Flex>
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"} float={"left"} width={"50%"}>
        <Box
          width="100%"
          maxWidth="480px"
          height="480px"
          borderRadius="15px"
          overflow="hidden"
          display={{ base: "-webkit-box", md: "flex" }}
          >
            <img src="https://img.freepik.com/premium-vector/nft-concept-3d-illustration-with-monkey-nonfungible-token-digital-items-with-crypto-art_641602-177.jpg?w=740" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>      
      </Flex>
    </Container>
  );
};

export default Home;

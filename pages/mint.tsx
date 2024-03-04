import { ConnectWallet, MediaRenderer, Web3Button, useAddress, useContract, useContractRead, useMetadata } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import NFTGrid from "../components/NFTGrid";
import { NextPage } from "next";
import { Box, Container, Flex, SimpleGrid, Skeleton, Heading, Text} from "@chakra-ui/react";

const Home: NextPage = () => {
    const address = useAddress();
    const contractAddress = "0xA3bcB393E3A6C4ee3aD5e9B8b5D2C24A21f1aDcc";
  
    const {contract} = useContract(contractAddress);
    const { data: metadata , isLoading: isLoadingMetada} = useMetadata(contract);
  
    const {data: totalMinted, isLoading: isLoadingTotalMinted} = useContractRead(contract, "totalMinted");
  
    return (
      <Container>
        <Flex h = {"70vh"} alignItems={"center"} justifyContent={"center"}>
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <Box width={"full"} maxWidth={"900px"}>
              <Skeleton isLoaded = {!isLoadingMetada}>
                <MediaRenderer 
                  src={"https://variety.com/wp-content/uploads/2022/03/Yuga-Labs-funding-Bored-Ape-Yacht-Club.png"} 
                />
              </Skeleton>
            </Box>
  
            <Flex direction = "column" justifyContent={"center"}>
              <Skeleton isLoaded = {!isLoadingMetada}>
                <Heading>
                  {(metadata as {name?: string})?.name }
                </Heading>
              </Skeleton>
              <Skeleton isLoaded = {!isLoadingTotalMinted} py={"10px"}>
                <p>Total free minted: {totalMinted?.toNumber()}/16</p>
              </Skeleton>
              {address ? (
                <Web3Button
                  contractAddress = {contractAddress}
                  action = {(contract) => contract.erc721.claim(1)}

                >Claim</Web3Button>
              ) : (
                <Text>Please connect to your wallet</Text>
              )}
            </Flex>
          </SimpleGrid>
        </Flex>
      </Container>
    );
  };
  
  export default Home;
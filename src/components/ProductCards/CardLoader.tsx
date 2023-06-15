import { Box, Flex, Grid, GridItem, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

type CardLoaderProps = {};

// BUG Scaling issue when resizing 
const CardLoader: React.FC<CardLoaderProps> = () => {
  return (
    <Flex border={"1px solid red"} justify="center" padding={"18px 30px"}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
          width={"85%"}
          height="100%"
        >
          {[...Array(12)].map((_, i) => (
            <GridItem key={i}>
              <Box padding={4} boxShadow="lg" rounded="md" bg="white">
                <Skeleton height="200px" />
                <Skeleton height="20px" marginTop="2" />
                <Skeleton height="20px" marginTop="2" />
                <Skeleton height="20px" marginTop="2" />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
  );
};

export default CardLoader;

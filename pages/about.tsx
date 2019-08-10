import { BaseStyles, Box, Heading, Text, Flex } from "@primer/components";

export default () => (
  <BaseStyles>
    <Flex flexDirection="column" alignItems="center">
      <Box width={600}>
        <Heading>About</Heading>
        <Text>
          Super simple demonstration of a Next.js app making a server call.
        </Text>
      </Box>
    </Flex>
  </BaseStyles>
);

import {
  BaseStyles,
  Box,
  Heading,
  CircleOcticon,
  Flex
} from "@primer/components";
import { NextPage, NextPageContext } from "next";
import Octokit from "@octokit/rest";
import { Star } from "@primer/octicons-react";
import Link from "next/link";

const Home: NextPage<{
  repos: {
    name: string;
    stars: number;
  }[];
}> = ({ repos }) => (
  <BaseStyles>
    <Flex flexDirection="column" alignItems="center">
      <Box width={600}>
        <Heading>Microsoft Repositories</Heading>
        <Link href="/about">About</Link>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Stars</th>
            </tr>
          </thead>

          <tbody>
            {repos.map(r => (
              <tr>
                <td>{r.name}</td>
                <td>
                  <Flex alignItems="center">
                    <CircleOcticon icon={Star} size={16} />
                    {r.stars}
                  </Flex>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Flex>
  </BaseStyles>
);

Home.getInitialProps = async (context: NextPageContext) => {
  const octokit = new Octokit();
  const result = await octokit.repos.listForOrg({
    org: "microsoft",
    type: "public"
  });

  return {
    repos: result.data.map(r => ({
      name: r.name,
      stars: r.stargazers_count
    }))
  };
};

export default Home;

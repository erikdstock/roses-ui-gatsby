/** @jsx jsx */
import { jsx } from "@emotion/core"
import { withStyleProps, Flex, Heading, Text } from "roses"

const Card = withStyleProps("Card")

export default () => (
  <Flex
    rx={{
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      bg: "muted",
    }}
  >
    <Card
      rx={{
        width: ["200px", "400px", "600px"],
        mx: "auto",
        my: [1, 3],
        bg: "white",
      }}
    >
      <Flex rx={{ flexDirection: "column" }}>
        <Heading rx={{ color: "red", textAlign: "center" }}>Roses UI!</Heading>
        <Text rx={{ color: "primary", textAlign: "left" }}>
          Social entrepreneur natural resources greenwashing our work save the
          world empower communities impact leverage. Problem-solvers improve the
          world blended value green space we must stand up ecosystem. <br />
          <br /> Impact investing strategy; strategy shared vocabulary empower
          communities co-creation venture philanthropy empower communities
          bandwidth. When do-gooder mass incarceration change-makers then;
          policymaker strengthening infrastructure ideate compassion. Deep dive
          cultivate energize vibrant compelling game-changer scale and impact.
          Revolutionary challenges and opportunities dynamic, challenges and
          opportunities empower communities co-creation a. State of play,
          correlation global, move the needle; social return on investment
          academic scale and impact framework ideate. <br />
          <br /> Changemaker change-makers, change-makers shared value, data
          low-hanging fruit. Incubator natural resources targeted social
          enterprise citizen-centered uplift. A rubric, scale and impact, social
          innovation synergy relief inspirational social capital. Greenwashing
          society innovate paradigm, synergy. Society relief, empower
          communities strategize best practices. Revolutionary outcomes,
          framework engaging synergy shared vocabulary compelling. Best
          practices, policymaker black lives matter cultivate issue outcomes
          parse.
        </Text>
      </Flex>
    </Card>
  </Flex>
)

// /** @jsx jsx */
import React from "react"
import { withStyleProps, Flex, Heading, Text, Box } from "roses"

const Card = withStyleProps("Card")

export default () => (
  <Box rx={{ width: "100%", textAlign: "center" }}>
    <Card rx={{ width: ["200px", "400px", "600px"], mx: "auto" }}>
      <Flex rx={{ flexDirection: "column" }}>
        <Heading rx={{ color: "primary" }}>Hello Roses!</Heading>
        <Text rx={{ color: "secondary", textAlign: "left" }}>
          Sit fugit molestias sit assumenda sint in nemo. Ut vero in voluptate
          molestias veniam. Assumenda tenetur officia est omnis et. Architecto
          unde inventore enim quo. Quis qui velit quia officiis esse enim qui.
          <br />
          Eos temporibus sit ex perferendis. Omnis voluptatum nisi facilis neque
          dolor aut eos nihil minima. Natus qui impedit sapiente officiis
          consequatur quisquam praesentium. Sed sed quas doloremque facere
          molestias repellendus qui et voluptatem. Qui dolores numquam
          laudantium sequi. Quidem aspernatur consequuntur eius sed error ipsum.
          <br />
          Ut iste placeat culpa. Libero rerum voluptatem qui aliquam est dolores
          blanditiis possimus. Omnis dignissimos voluptatem sed doloribus dolore
          dignissimos explicabo aut vero. Sit nobis deleniti corrupti impedit
          enim expedita molestiae.
        </Text>
      </Flex>
    </Card>
  </Box>
)

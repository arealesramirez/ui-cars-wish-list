import React from "react";

import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import Section from "react-bulma-components/lib/components/section";

export default class CarCreate extends React.Component {
  render() {
    return (
      <Section>
        <Container>
          <Heading size={5} renderAs="h1">
            Create a Car
          </Heading>
        </Container>
      </Section>
    );
  }
}

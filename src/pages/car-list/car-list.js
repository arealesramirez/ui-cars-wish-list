import React from "react";

import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import Section from "react-bulma-components/lib/components/section";

import { getCars } from "../../api/car.api";

export default class ListCars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    this.getLatestCarList();
  }

  async getLatestCarList() {
    const cars = await getCars();
    this.setState({ cars });
  }

  render() {
    return (
      <Section>
        <Container>
          <Heading size={5} renderAs="h1">
            My Car Wish List
          </Heading>
          <ul>
            {this.state.cars.map((car) => (
              <li key="{car.id}">{car.model}</li>
            ))}
          </ul>
        </Container>
      </Section>
    );
  }
}

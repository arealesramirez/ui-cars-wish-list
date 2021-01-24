import React from "react";

import { createCar } from "./../../api/car.api";

import Heading from "react-bulma-components/lib/components/heading";
import Container from "react-bulma-components/lib/components/container";
import Section from "react-bulma-components/lib/components/section";
import Button from "react-bulma-components/lib/components/button";
import {
  Field,
  Control,
  Label,
  Input,
} from "react-bulma-components/lib/components/form";

export default class CarCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: "",
      model: "",
      year: "",
      bodyStyle: "",
      price: "",
    };
    this.resetForm = this.resetForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.createCar = this.createCar.bind(this);
  }

  resetForm() {
    this.setState({
      make: "",
      model: "",
      year: "",
      bodyStyle: "",
      price: "",
    });
  }

  onChange(event) {
    this.setState((currentState) => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  }

  createCar(event) {
    event.preventDefault();

    createCar(this.state)
      .then(() => {
        console.log('New Car Created!');
      })
      .catch(() => {
        console.error('Houston! we have an error!');
      });
  }

  render() {
    const { bodyStyle, make, model, price, year } = this.state;

    return (
      <Section>
        <Container>
          <Heading size={5} renderAs="h1">
            Create a Car
          </Heading>

          <form onSubmit={this.createCar}>
            <Field>
              <Label>Make</Label>
              <Control>
                <Input
                  onChange={this.onChange}
                  name="make"
                  type="text"
                  placeholder="Ex. Ford"
                  value={make}
                />
              </Control>
            </Field>

            <Field>
              <Label>Model</Label>
              <Control>
                <Input
                  onChange={this.onChange}
                  name="model"
                  type="text"
                  placeholder="Ex. Mustang"
                  value={model}
                />
              </Control>
            </Field>

            <Field>
              <Label>Year</Label>
              <Control>
                <Input
                  onChange={this.onChange}
                  name="year"
                  type="number"
                  min="1940"
                  max={new Date().getFullYear()}
                  placeholder="Ex. 2020"
                  value={year}
                />
              </Control>
            </Field>

            <Field>
              <Label>Body Style</Label>
              <Control>
                <Input
                  onChange={this.onChange}
                  name="bodyStyle"
                  type="text"
                  placeholder="Ex. Sedan"
                  value={bodyStyle}
                />
              </Control>
            </Field>

            <Field>
              <Label>Price</Label>
              <Control>
                <Input
                  onChange={this.onChange}
                  name="price"
                  type="number"
                  placeholder="Ex, $25000"
                  value={price}
                />
              </Control>
            </Field>

            <Field kind="group">
              <Control>
                <Button color="link" onClick={this.resetForm}>
                  Reset
                </Button>
              </Control>
              <Control>
                <Button type="primary">Submit</Button>
              </Control>
            </Field>
          </form>
        </Container>
      </Section>
    );
  }
}

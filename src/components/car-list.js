import React from "react";

import { getCars } from "../api/car.api";

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
      <ul>
        {this.state.cars.map((car) => (
          <li key="{car.id}">{car.model}</li>
        ))}
      </ul>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";

import "./nav.sass";

import Container from "react-bulma-components/lib/components/container";
import Section from "react-bulma-components/lib/components/section";

export default function Nav() {
  return (
    <div className="nav-wrapper">
      <Section>
        <Container>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/new">Create a Car</Link>
        </Container>
      </Section>
    </div>
  );
}

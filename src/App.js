import "./App.sass";

import Container from 'react-bulma-components/lib/components/container';
import Section from 'react-bulma-components/lib/components/section';

import CarList from "./components/car-list";

function App() {
  return (
    <div>
      <header className="app-header">
      </header>
      <Section>
        <Container>
        <CarList />
        </Container>
      </Section>
    </div>
  );
}

export default App;

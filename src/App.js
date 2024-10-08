import React from 'react';
import '../src/styles/global.scss';
import { Col, Container, Row, Button, Stack } from 'react-bootstrap';

function App() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Button variant="primary">
        Button as link
      </Button>
      <Button variant="secondary">
        Button as link
      </Button>
    </Stack>
  );
}

export default App;

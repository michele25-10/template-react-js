import React from 'react';
import '../src/styles/global.scss';
import { Col, Container, Row, Button, Stack } from 'react-bootstrap';


import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n: { changeLanguage, language } } = useTranslation()

  return (

    <Container>
      <div className='title'> {t('headerTitle', { author: "Michele Gabrieli" })}</div>
      <Stack direction='vertical' gap={5}>
        <Row xs={2} md={4} lg={6}>
          <Col>
            <Stack direction="vertical" gap={3} align="center"
              style={{ backgroundColor: "red" }}>
              <div className="p-2">First item</div>
              <div className="p-2">Second item</div>
              <div className="p-2">Third item</div>
            </Stack>
          </Col>
          <Col>2 of 2</Col>
          <Col>2 of 2</Col>
          <Col>2 of 2</Col>
          <Col>2 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row xs={1} md={2} lg={3}>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row xs="auto">
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Stack>
    </Container>
  );
}

export default App;

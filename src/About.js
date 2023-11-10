import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function AboutOrigami() {
  return (
    <div>
      <h1>El Arte del Origami</h1>
      <p>El origami es un antiguo arte japonés de plegado de papel que crea formas fascinantes mediante dobleces precisos.</p>
      <Container>
        <Row>
          <Col>
            <h2>Características</h2>
            <ul>
              <li>Origen en Japón con más de mil años de historia</li>
              <li>Utiliza papel sin cortes ni pegamento</li>
              <li>Promueve la creatividad y paciencia</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Beneficios</h2>
            <ul>
              <li>Desarrolla habilidades motoras y de concentración</li>
              <li>Reduce el estrés y promueve la relajación</li>
              <li>Posibilita la creación de diseños complejos a partir de simples hojas de papel</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Explora el Origami</h2>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Ejemplo de Origami 1" />
                  <Card.Body>
                    <Card.Title>Ejemplo 1</Card.Title>
                    <Card.Text>Descripción del modelo de origami.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Ejemplo de Origami 2" />
                  <Card.Body>
                    <Card.Title>Ejemplo 2</Card.Title>
                    <Card.Text>Descripción del modelo de origami.</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* Puedes agregar más Cards según sea necesario */}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

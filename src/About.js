import logo from "./logo.svg";
import React from "react";
import { Accordion, Card, Container, Row, Col, Image} from 'react-bootstrap';

export default function AboutOrigami() {
  return (
    <div>

  <Container>
      <h1>Explorando el Universo de Halo Infinite</h1>
      <Image
        src="https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2019/10/01/D0D556F9-9840-4737-9D4D-133CA6E5C9B5/69.jpg?crop=1526,858,x0,y17&width=1280&height=720&optimize=low&format=webply"
        alt="imagen"
        fluid
      />
      <p>
        Halo Infinite es una emblemática franquicia de videojuegos que sumerge a los jugadores en un vasto universo lleno de aventuras y desafíos. Desde su inicio, la saga Halo ha cautivado a los jugadores con una narrativa épica, ofreciendo experiencias que van más allá del entretenimiento convencional.
      </p>
      <p>
        Este juego no solo se destaca por su jugabilidad innovadora, sino también por su compromiso con la creación de mundos visualmente impresionantes y una narrativa compleja que ha evolucionado a lo largo de los años.
      </p>
    </Container>

<br/><br/>
  <Container>
    <Row>
      <Col>
        <Card>
        <Card>
  <Card.Body>
    <h2>Caracteristicas</h2>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Emocionantes batallas contra alienígenas y facciones militares</li>
      <li className="list-group-item">Mundo expansivo con escenarios dinámicos y diversos</li>
      <li className="list-group-item">Tecnología avanzada y armamento icónico</li>
    </ul>
  </Card.Body>
</Card>
        </Card>
      </Col>
    </Row>
    <br/>
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <h2>Beneficios</h2>
            <ul>
              <li>Desarrollo de habilidades estratégicas y de combate</li>
              <li>Inmersión en una historia envolvente y compleja</li>
              <li>Posibilidad de explorar un vasto universo con múltiples planetas y dimensiones</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br/>
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <h2>Explora Halo Infinite</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>El Legado de la Serie</Accordion.Header>
                <Accordion.Body>
                Sumérgete en la rica historia de Halo y descubre la evolución de la saga a lo largo de los años. Desde los inicios con el primer juego en 2001, la serie ha crecido y se ha expandido, ofreciendo historias complejas, personajes icónicos y un rico universo de ciencia ficción.
                Con su innovador enfoque en la jugabilidad, la narrativa y el diseño, la saga Halo ha sido reconocida por su impacto en la industria de los videojuegos y su influencia en el entretenimiento interactivo.
                 </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Exploración en un Universo Épico</Accordion.Header>
                <Accordion.Body>
                  Viaja a través de diferentes planetas y escenarios, desvela secretos y enfrenta desafíos épicos.
                  A lo largo de los años, Halo ha introducido avances técnicos y narrativos, elevando constantemente los estándares de la industria y desafiando las expectativas de los jugadores.
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
 


      <footer style={{ backgroundColor: "#1A237E", color: "#FFFFFF" }}>
        {/* Footer */}
        <Container>
          <Row>
            <Col md={4}>
              <img
                src={logo}
                alt="Logo de la Aplicación"
                style={{ width: "200px", height: "100px" }}
              />
            </Col>
            <Col md={4}>
            <br/><br/>
              <p>Halo Infinity copyright &copy; 2023</p>
            </Col>
            <Col md={4}>
              <img
                src={logo}
                alt="Logo de la Aplicación"
                style={{ width: "200px", height: "100px" }}
              />
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

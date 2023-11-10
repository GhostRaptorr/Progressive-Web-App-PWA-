import React from "react";
import { Carousel, Container, Row, Col, Accordion } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Bienvenido a mi Sitio</h1>
      </header>

      <section>
        {/* Carrusel */}
        <Container>
          <Row>
            <Col>
              <h2></h2>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://wallpapercave.com/wp/wp2342125.jpg"
                    alt="Primer Slide"
                  />
                  <Carousel.Caption>
                    <h3>Proyecto 1</h3>
                    <p>Descripción del primer proyecto.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/90/83/35/9083359d9d7061378ff1fbe7b12ec8af.jpg"
                    alt="Segundo Slide"
                  />
                  <Carousel.Caption>
                    <h3>Proyecto 2</h3>
                    <p>Descripción del segundo proyecto.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Puedes agregar más items según sea necesario */}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        {/* Presentación */}
        <Container>
          <Row>
            <Col>
              <h2>¡Hola!</h2>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <footer style={{ backgroundColor: "#1A237E", color: "#FFFFFF" }}>
  {/* Footer */}
  <Container>
    <Row>
      <Col md={4}>
        {/* Sección del logo */}
        <img src="ruta-a-tu-logo.png" alt="Logo" style={{ width: "100px" }} />
      </Col>
      <Col md={4}>
        {/* Sección de contacto */}
        <h4>Contacto</h4>
        <p>¡Contáctame para discutir tu próximo proyecto!</p>
        {/* Agrega información de contacto */}
      </Col>
      <Col md={4}>
        {/* Sección de iconos de redes sociales */}
        <h4>Redes Sociales</h4>
        <div>
          {/* Agrega los iconos de redes sociales con los estilos de Bootstrap */}
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          {/* Reemplaza las clases de iconos con las correspondientes de Bootstrap */}
        </div>
      </Col>
    </Row>
  </Container>
</footer>

    </div>
  );
}

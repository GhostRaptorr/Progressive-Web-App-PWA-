import logo from "./logo.svg";
import React from "react";
import {
  Card,
  Carousel,
  Container,
  Row,
  Col,
  Accordion,
} from "react-bootstrap";


export default function Home() {
  return (
    <div>
      <header>
        <h1>HALO INFITI</h1>
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
                    src="https://i.pinimg.com/originals/8f/c0/2a/8fc02adb4d6b1809f468be5c1d3855ff.jpg"
                    alt="Primer Slide"
                  />
                  <Carousel.Caption>
                    <h3>Arte Conceptual de Halo Infinite</h3>
                    <p>
                      Explora una colección de arte conceptual impresionante que
                      muestra los mundos y criaturas de la próxima entrega de la
                      saga Halo. Sumérgete en diseños detallados que inspiraron
                      la creación de este universo épico.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://wallpapers.com/images/featured/halo-infinite-wuhidroy7k38fnz2.jpg"
                    alt="Segundo Slide"
                  />
                  <Carousel.Caption>
                    <h3>Desarrollo de Armas de Combate</h3>
                    <p>
                      Sumérgete en el proceso de desarrollo de las armas de
                      combate para Halo Infinite. Desde la conceptualización
                      hasta la implementación en el juego, descubre cómo se
                      crearon y equilibraron las armas icónicas para ofrecer una
                      experiencia de juego intensa y emocionante.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://preview.redd.it/zy2kyxd6p8311.png?auto=webp&s=b65b32a0804b5f60c5ba798f29ee7d696cbcbdb7"
                    alt="Tercer Slide"
                  />
                  <Carousel.Caption>
                    <h3>Diseño de Niveles Interactivos</h3>
                    <p>
                      Explora la ingeniería detrás de los niveles interactivos
                      de Halo Infinite. Descubre cómo se han diseñado paisajes y
                      escenarios para ofrecer una experiencia de juego
                      inmersiva, desafiante y llena de acción para los
                      jugadores.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* Puedes agregar más items según sea necesario */}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
      <br />

      <section>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://c4.wallpaperflare.com/wallpaper/69/728/1015/master-chief-halo-infinite-hd-wallpaper-preview.jpg"
                alt="Ejemplo de Origami 1"
              />
              <Card.Body>
                <Card.Title>Exploración de Anillos Halo</Card.Title>
                <Card.Text>
                  Únete a una emocionante misión de exploración en los anillos
                  Halo en Halo Infinite. Descubre paisajes alienígenas, enfrenta
                  peligros y desentraña los misterios de esta serie de
                  instalaciones increíbles.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://coolthemestores.com/wp-content/uploads/2021/10/Halo-Infinite-wallpaper-background.jpg"
                alt="Ejemplo de Origami 2"
              />
              <Card.Body>
                <Card.Title>Alianza Covenant en Halo Infinite</Card.Title>
                <Card.Text>
                  Aprende más sobre la misteriosa presencia de la Alianza
                  Covenant en Halo Infinite. ¿Cuáles son sus objetivos en esta
                  entrega? Descubre secretos y desafíos mientras exploras la
                  narrativa del juego.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://c4.wallpaperflare.com/wallpaper/71/252/999/halo-infinite-master-chief-halo-the-weapon-halo-halo-zeta-halo-hd-wallpaper-preview.jpg"
                alt="Ejemplo de Origami 2"
              />
              <Card.Body>
                <Card.Title>Armadura Mjolnir MK VII</Card.Title>
                <Card.Text>
                  Explora la última generación de la icónica armadura Mjolnir en
                  Halo Infinite. Descubre sus capacidades mejoradas y cómo te
                  preparará para enfrentar amenazas alienígenas en el nuevo
                  título de la serie.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Puedes agregar más Cards según sea necesario */}
        </Row>
      </section>
      <br></br>

      <Container>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="780"
            height="455"
            src="https://www.youtube.com/embed/PyMlV5_HRWk?si=ckO-5gIiEQ91lrHB"
            title="YouTube video player"
            frameBorder="0" // Modificado a 'frameBorder' con 'B' mayúscula
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen // React interpreta 'allowfullscreen' como 'allowFullScreen'
          ></iframe>
        </div>
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

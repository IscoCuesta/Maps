import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import Parallax from "../components/parallax";
import { ParallaxBanner } from 'react-scroll-parallax';
// import API from "../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <img className="WelcomeLogo" src={require("../static/logo.png")} alt="logo"></img>
          <article style={{height: "300px"}}>
            <h1>bienvenido!</h1>
            <h2>Gracias por estar aqui.</h2>
            <h2>Esperamos porder crecer juntos en la direccion correcta.</h2>
          </article>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ParallaxBanner    
             layers={[
                  {
                      image: 'https://i.imgur.com/G9rCmxI.gif',
                      amount: .4,
                  },
              ]}   
               style={{
                height: '500px',
              }}>
              {/* <img src={require("../static/AP_1080.gif")} alt="logo"></img> */}
            </ParallaxBanner>
            <article style={{height: "300px"}}>
              <h1>Te queremos contar nuestra percepción de la realidad.</h1>
              <h3>este proyecto no se trata de nosotros ni de ellos, 
                se trata de hablar de los temas que importan y hacer una diferencia.</h3>
            </article>
            <ParallaxBanner    
             layers={[{
                      image: 'https://i.imgur.com/wS7Dlon.png',
                      amount: 0.4,
                  }]}
               style={{
                height: '500px',
              }}></ParallaxBanner>
            <article style={{height: "300px"}}>
            <h1>Todo lo material empieza con el mundo y sus recursos. </h1>
              <h3>para BIEN (extracción consiente y sustentable de los materiales, 
                diseñando para que el producto cumpla con su objetivo principal 
                Y pueda ser recuperado para cumplir otro propósito).</h3>
                <h3>
                O para MAL (extracción desmedida de material generando desperdicio,
                 diseño lineal o para cumplir un solo propósito y ser desechado)
                </h3>

            </article>
            <ParallaxBanner    
             layers={[{
                      image: 'https://i.imgur.com/ruil8NL.jpg',
                      amount: 0.4,
                  }]}
               style={{
                height: '500px',
              }}></ParallaxBanner>
            <article style={{height: "300px"}}>
            <h1>El PLANETA tiene recursos finitos. </h1>
              <h3>El hombre busca satisfacer sus necesidades utilizando recursos del planeta.</h3>
              <h3>
              A medida que la sociedad crece la competencia también,
              haciendo que las personas creen necesidades FICTICIAS para sobresalir.
              </h3>
              
            </article>
            <ParallaxBanner    
             layers={[{
                      image: 'https://i.imgur.com/iqY1Kjb.jpg',
                      amount: 0.4,
                  }]}
               style={{
                height: '500px',
              }}></ParallaxBanner>
            <article style={{height: "300px"}}>
            <h1>Necesidades FICTICIAS</h1>
              <h3>Todas estas necesidades que nos creamos nos llevan a consumir.</h3>
              <h3>
              Nosotros, como consumidores, dictamos la direccion del mercado y las decisiones de las grandes corporaciones.</h3>
              <h3>El problema es cuando las corporaciones pueden crearte necesidades FICTICIAS.</h3>
            <h3>Cuando una Corporacion te puede crear una necesidad es por falta de conocimiento y/o reflexión.</h3>
              <h1>Nosotros Ceermos en TODOS.</h1>
              <h3>Nuestra propuesta es una marca que empieza por recolectar deshechos de otras Industrias, reacondicionarlos,
                darles diseño, y ponerlos en la casa del cliente.
              </h3>
              <h3>Empezamos por vender muebles pero la intención es llevar el mensaje.</h3>
            </article>
            <ParallaxBanner    
             layers={[{
               image: 'https://i.imgur.com/qzz8OPx.jpg',
               amount: 0.4,
              }]}
               style={{
                 height: '500px',
                }}></ParallaxBanner>
                <article style={{height: "300px"}}>
                  <h1>Nosotros Ceermos en TODOS.</h1>
                  <h3>Nuestra propuesta es una marca que empieza por recolectar deshechos de otras Industrias, reacondicionarlos,
                    darles diseño, y ponerlos en la casa del cliente.
                  </h3>
                  <h3>Empezamos por vender muebles pero la intención es llevar el mensaje.</h3>
                </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/cotizar">cotiza con nosotros</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;

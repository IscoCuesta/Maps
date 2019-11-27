import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
// import { setServers } from "dns";

class Carrito extends Component {
  state = {
    Carrito: [],
    orden: "",
    cliente: "",
    email: "",
    telefono: "",
    contacto: false,
    listo: false
  };

  componentDidMount() {
    this.loadCart();
    
  }

  loadCart = () => {
    let actual = JSON.parse(localStorage.getItem("BCC"))
    console.log(actual);
    this.setState({
      Carrito: actual
    })
  }

  deleteCart = () => {
    localStorage.setItem("BCC", [])
    this.setState({
      Carrito: [],
      orden: "",
      cliente: "",
      email: "",
      telefono: "",
      contacto: false,
      listo: false
    })
    
  }

  delete = Num => {
    let nuevo = this.state.Carrito.filter(prod => prod.Num !== Num);
    this.setState({
      Carrito: nuevo
    })
    localStorage.setItem("BCC", JSON.stringify(nuevo));
  }

  isReady = () => {
    if(this.state.orden !== ""){
      this.setState({
        listo: true
      });
      if(this.state.telefono !== "" || this.state.email !== ""){
        console.log("estoy dentro!!!")
        this.setState({
          contacto: true
        })
      }; 
    }else{
      this.setState({
        listo: false,
        contacto: false
      })
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.isReady();
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveOrden({
        Carrito: this.state.Carrito,
        orden: this.state.orden,
        cliente: this.state.cliente,
        email: this.state.email,
        telefono: this.state.telefono,
        contacto: this.state.contacto
      })
        .then(res => {
          this.deleteCart();
          console.log(res)})
        .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav carrito={this.state.Carrito.length} />
        <Container fluid>
          <Row>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Carrito de compras</h1>
              </Jumbotron>
              {this.state.Carrito.length ? (
                <List>
                  {this.state.Carrito.map(Item => (
                    <ListItem key={Item.Num}>
                        <strong>
                          {Item.tipo} con: {Item.seleccion.map(prod =>  " -> " +prod)}
                        </strong>
                        <DeleteBtn onClick={() => this.delete(Item.Num)} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>Uups! sin articulos en el carrito</h3>
              )}
            </Col>
            <Col size="md-6 sm-12">
              <h3>Dejanos tus datos para contactarte y proporcionarte los metodos de pago y forma de envío</h3>
              <br></br>
              <h4>O si prefieres dale un nombre a tu orden y contactanos cuando prefieras al tel: 55 5555 5555</h4>
              <br></br>
              <form>
                <Input
                  value={this.state.orden}
                  onChange={this.handleInputChange}
                  name="orden"
                  placeholder="Nombre de la Orden (Requerido)"
                />
                <Input
                  value={this.state.cliente}
                  onChange={this.handleInputChange}
                  name="cliente"
                  placeholder="Nombre (Opcional)"
                />
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="E-mail (Opcional)"
                />
                <Input
                  value={this.state.telefono}
                  onChange={this.handleInputChange}
                  name="telefono"
                  placeholder="Telefono (Opcional)"
                />
                {this.state.listo ?
                <FormBtn
                onClick={this.handleFormSubmit}
                >
                  registra tu orden
                </FormBtn>
                : ""}
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Carrito;

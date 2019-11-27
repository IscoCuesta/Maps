import React, { Component } from "react";
import DeckGL from '@deck.gl/react';
import {StaticMap} from 'react-map-gl';
import {ScatterplotLayer} from '@deck.gl/layers';
import dataBase from '../utils/DB'

import "./MapaStyle.css"
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

// const Map = ReactMapboxGl({
//   accessToken:
//   'sk.eyJ1IjoiaXNjb2N1ZXN0YTk5IiwiYSI6ImNrMzZsN2p4ZjAya2kzaW4wcml4YjIyMTkifQ.8Cg_jTnwGp9WYyTA124WTw'
// });

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiaXNjb2N1ZXN0YTk5IiwiYSI6ImNrMzZsNHltaTAydmIzbnBhcnBzbXYwYzYifQ.XX9vW4VRecOerdteSM7SUg';

// Initial viewport settings
const initialViewState = {
  longitude: -99.1273913,
  latitude: 19.41,
  zoom: 3.5,
  pitch: 0,
  bearing: 0
};


// mapboxgl.accessToken = 'sk.eyJ1IjoiaXNjb2N1ZXN0YTk5IiwiYSI6ImNrMzZsN2p4ZjAya2kzaW4wcml4YjIyMTkifQ.8Cg_jTnwGp9WYyTA124WTw';
// var Map = new mapboxgl.Map({
//   container: 'mapid',
//   style: 'mapbox://styles/mapbox/streets-v11'
// });


// Data to be used by the LineLayer
const data = [{COORDINATES: [-99.127, 19.41]}];


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {      
      Delito: "homicidio",
      value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // state = {
  //   Delito: "homicidio",
  //   value: ''
  // }


  _renderTooltip() {
    const {hoveredObject, pointerX, pointerY} = this.state || {};
    return hoveredObject && (
      <div style={{position: 'absolute', zIndex: 1, pointerEvents: 'none', left: pointerX, top: pointerY}}>
        { hoveredObject.message }
      </div>
    );
  }

  handleChange(event) {
    console.log( event.target.value);
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    const layers = [
      // new LineLayer({id: 'line-layer', data}),
      new ScatterplotLayer({
        id: 'scatterplot-layer',
        data: dataBase.filter(data => data.Delito === this.state.value),
        pickable: true,
        opacity: .6,
        stroked: true,
        filled: true,
        radiusScale: 6,
        radiusMinPixels: 1,
        radiusMaxPixels: 500,
        lineWidthMinPixels: 1,
        getPosition: d => d.Location,
        getRadius: d => d['2015']*12900000/d['Poblacion'],
        getFillColor: d => [255, 140, 0],
        getLineColor: d => [0, 0, 0],
        // onHover: ({object, x, y}) => {
        //   const tooltip = `${object.name}\n${object.address}`;
          /* Update tooltip
             http://deck.gl/#/documentation/developer-guide/adding-interactivity?section=example-display-a-tooltip-for-hovered-object
          */
        // }
        onHover: info => this.setState({
          hoveredObject: info.object,
          pointerX: info.x,
          pointerY: info.y
        })
      })
    ];

    return (
      <div>

        <form 
        onSubmit={this.handleSubmit}
        className='form'
        >
          <label>
          Selecciona Delito:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value='aborto'>aborto</option>
            <option value='abuso de confianza'>abuso de confianza</option>
            <option value='abuso sexual'>abuso sexual</option>
            <option value='allanamiento de morada'>allanamiento de morada</option>
            <option value='amenazas'>amenazas</option>
            <option value='Armas de fuego'>Armas de fuego</option>
            <option value='Asistencia familiar'>Asistencia familiar</option>
            <option value='contra la salud'>contra la salud</option>
            <option value='corrupción de menores'>corrupción de menores</option>
            <option value='daño a la propiedad'>daño a la propiedad</option>
            <option value='delitos electorales'>delitos electorales</option>
            <option value='delitos medioambientales'>delitos medioambientales</option>
            <option value='despojo'>despojo</option>
            <option value='extorsión'>extorsión</option>
            <option value='fraude'>fraude</option>
            <option value='fuero comun'>fuero comun</option>
            <option value='homicidio'>homicidio</option>
            <option value='hostigamiento sexual'>hostigamiento sexual</option>
            <option value='lesiones'>lesiones</option>
            <option value='narcomenudeo'>narcomenudeo</option>
            <option value='otros delitos'>otros delitos</option>
            <option value='privación de la libertad'>privación de la libertad</option>
            <option value='responsabilidad de servidores públicos'>responsabilidad de servidores públicos</option>
            <option value='robo a banco'>robo a banco</option>
            <option value='robo a negocio'>robo a negocio</option>
            <option value='robo a transeúnte'>robo a transeúnte</option>
            <option value='robo a transportista'>robo a transportista</option>
            <option value='robo de autopartes'>robo de autopartes</option>
            <option value='robo de casa'>robo de casa</option>
            <option value='robo de ganado'>robo de ganado</option>
            <option value='robo de vehículo'>robo de vehículo</option>
            <option value='robo en transporte'>robo en transporte</option>
            <option value='secuestro'>secuestro</option>
            <option value='trata de personas'>trata de personas</option>
            <option value='violación'>violación</option>
            <option value='violencia familiar'>violencia familiar</option>
          </select>
        </label>
      </form>
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
        >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />

      </DeckGL>
      </div>
    );
  }
}

export default App;

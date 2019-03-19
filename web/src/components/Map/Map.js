import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { simpleAction } from '../../actions/simpleAction';
import './Map.css';
import Modal from '../Modal/Modal.js';
import getData from '../../api';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
      isOpen: false,
      country: '',
      city: '',
      temperature: ''
    };
  }

  static defaultProps = {
    apiKey: "AIzaSyDqEH306foj-4rDZ5c0NtP_F5KH-B3UN3E",
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 2.25,
    options: {
      disableDefaultUI: true,
      draggable: false,
      minZoom: 2.25,
      maxZoom: 2.25,
      scrollwheel: false,
      zoomControl: false,
    }
  };

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  onClick = ({lat, lng}) => {
    getData(lat + ',' + lng);
    this.setState({ lat, lng, isOpen: true });
  };

  render() {
    const { apiKey, center, zoom, options } = this.props;
    const { lat, lng, isOpen, country, city, temperature } = this.state;

    return (
      <div className="Map" style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          defaultCenter={center}
          defaultZoom={zoom}
          options={options}
          onClick={this.onClick}
        >
          <Modal
            lat={lat}
            lng={lng}
            isOpen={isOpen}
            country={country}
            city={city}
            temperature={temperature}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(
  state => ({
    ...state
  }), 
  dispatch => ({
    simpleAction: () => dispatch(simpleAction())
 }))(Map);

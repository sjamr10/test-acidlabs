import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
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
      temperature: '',
      humidity: '',
      windSpeed: '',
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

  onClick = async ({lat, lng}) => {
    this.setState({ loading: true, error: null, lat, lng, isOpen: true });
    try {
      const { country, city, temperature, humidity, windSpeed } = await getData(lat + ',' + lng);
      this.setState({ loading: false, country, city, temperature, humidity, windSpeed });
    } catch (e) {
      this.setState({ loading: false, error: 'Ha ocurrido un error, por favor inténtelo de nuevo'});
    }
  };

  render() {
    const { apiKey, center, zoom, options } = this.props;
    const { loading, lat, lng, error, isOpen, country, city, temperature, humidity, windSpeed } = this.state;

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
            error={error}
            isOpen={isOpen}
            loading={loading}
            country={country}
            city={city}
            temperature={temperature}
            humidity={humidity}
            windSpeed={windSpeed}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

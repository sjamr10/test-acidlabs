import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { simpleAction } from '../../actions/simpleAction';
import './Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
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

  render() {
    const { apiKey, center, zoom, options } = this.props;

    return (
      <div className="Map" style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          defaultCenter={center}
          defaultZoom={zoom}
          options={options}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
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

import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
      loading: props.loading,
    }
  }

  render() {
    const { error, isOpen, loading, country, city, temperature, humidity, windSpeed } = this.props;

    return (
      error 
        ?
        <div className={`Modal ${isOpen ? 'show' : 'hide'}`}>
          <div>
            <div className="data error">{error}</div>
          </div>
        </div>
        :
        <div className={`Modal ${isOpen ? 'show' : 'hide'}`}>
          {
            loading 
              ? 
              <div>
                <div className="loading" />
              </div>
              : 
              <div>
                <div className="data country">{country}</div>
                <div className="data city">{city}</div>
                <div className="data weather">{temperature} ºC</div>
                <div className="data weather">{Math.round(humidity * 100)}%</div>
                <div className="data weather">{windSpeed} km/h</div>
              </div>
          }
        </div>
    );
  }
}

export default Modal;

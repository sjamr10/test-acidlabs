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
    const { isOpen, loading, country, city, temperature } = this.props;

    return (
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
              <div className="data temperature">{temperature} ºC</div>
            </div>
        }
      </div>
    );
  }
}

export default Modal;

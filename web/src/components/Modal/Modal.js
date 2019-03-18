import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
      loading: true,
    }
  }

  render() {
    const { country, city, temperature } = this.props;

    return (
      <div className={`Modal ${this.props.isOpen ? 'show' : 'hide'}`}>
        <div className="data country">{country}</div>
        <div className="data city">{city}</div>
        <div className="data temperature">{temperature}</div>
      </div>
    );
  }
}

export default Modal;

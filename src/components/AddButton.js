import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={ onClick }>+</button>;
  }
}

export default AddButton;

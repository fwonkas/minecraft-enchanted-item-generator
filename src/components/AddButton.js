import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick } = this.props;
    return <button onClick={ onClick }>+</button>;
  }
}

export default AddButton;

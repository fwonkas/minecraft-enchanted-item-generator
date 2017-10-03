import React, { Component } from 'react';

class DeleteButton extends Component {

  render() {
    const { onClick, index } = this.props;
    return <button data-index={ index } onClick={ onClick }>-</button>;
  }
}

export default DeleteButton;

import React, { Component } from 'react';
import Selection from './Selection';

class Level extends Component {
  render() {
    const { onChange, index, currentValue } = this.props;
    return <Selection currentValue={ currentValue } onChange={ onChange } index={ index } name="thing" options={ [
      { title: 'I', id: 1 },
      { title: 'II', id: 2 },
      { title: 'III', id: 3 },
      { title: 'IV', id: 4 },
      { title: 'V', id: 5 }
    ] } />
  }
}

export default Level;

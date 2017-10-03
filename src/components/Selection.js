import React, { Component } from 'react';
import Option from './Option';
import { uniqueId } from 'lodash';

class Selection extends Component {
  constructor(props) {
    super(props);
    const { options } = props;
    this.state = {
      options
    }
  }

  render() {
    const { name, index, onChange, currentValue } = this.props;
    return (
      <select value={ currentValue } name={ name } data-index={ index } onChange={ onChange }>
        { this.state.options.map(option => {
          const key = uniqueId(`${option.title}-${option.id}`);
          const optProps = {
            key,
            id: option.id,
            title: option.title
          };
          return (
            <Option { ... optProps } />
          )
        }) }
      </select>
    )
  }
}

export default Selection;

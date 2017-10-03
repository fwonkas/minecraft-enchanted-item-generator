import React, { Component } from 'react';

class Option extends Component {
	constructor(props) {
		super(props);
		const { title, id } = props;
		this.state = {
			title,
			id
		};
	}

	render() {
		const { id, title } = this.state;
    const properties = {
      value: id
    }
		return (
			<option { ...properties }>{title}</option>
		)
	}
}

export default Option;

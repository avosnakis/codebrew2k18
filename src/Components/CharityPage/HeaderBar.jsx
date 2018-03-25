import React from 'react';

export const NAMES = ['AARP Foundation', 'UNICEF', 'Greenpeace', 'Thrive Africa',
                      'Rockefeller Foundation', 'Operation USA', 'Dream Center', 'American Red Cross'];

export default class HeaderBar extends React.Component {
	constructor(props) {
		super(props);
		this.value = props.state.value;
	}
	
	render() {
		return (
			<div>
				<h2>{NAMES[this.value]}</h2>
			</div>
		)
	};
}
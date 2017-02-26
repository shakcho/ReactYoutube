import React from 'react';

class SearchBar extends React.Component {
	
	constructor(props){
		super(null);
		this.state = {term : '' }
	}

	render() {
		return (
			<div>
				<input onChange={event => this.setState({term : event.target.value})}/>
				<p>{this.state.term}</p>
			</div>
		);	
	}
}
export default SearchBar;
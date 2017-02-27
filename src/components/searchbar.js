import React from 'react';

class SearchBar extends React.Component {
	
	constructor(props){
		super(null);
		this.state = {term : '' }
	}
	handelInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
	render() {
		return (
			<div>
				<input value={this.state.term} onChange={event => this.handelInputChange(event.target.value)}/>
			</div>
		);	
	}
	
}
export default SearchBar;
import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/VideoList';

const key = 'AIzaSyDl2toQ4ep-aCO14IGtVHoqCB5B7bU7GNA';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {videos: []};
		YTSearch({ key, term: 'React JS'}, (videos) => {
			this.setState({videos})
		});
	}

	render() {
		return (
			<div>
				<h1>from react app component</h1>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('app'));
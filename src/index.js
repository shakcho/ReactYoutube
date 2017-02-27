import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetails';

const key = 'AIzaSyDl2toQ4ep-aCO14IGtVHoqCB5B7bU7GNA';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo : null
		};
		this.searchVideo('Reactjs');
	}
	searchVideo(term){
		YTSearch({ key, term : term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo : videos[0]
			});
		});
	}
	render() {
		return (
			<div>
				<header>
					<h1>ReactYouTube</h1>
					<SearchBar onSearchTermChange={term => this.searchVideo(term)} />
				</header>
				<div className="row">
					<VideoDetail video={this.state.selectedVideo} />
					<VideoList 
						onVideoSelect={ selectedVideo => this.setState({selectedVideo})} 
						videos={this.state.videos} 
					/>
				</div>
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('app'));
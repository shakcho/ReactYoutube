import React from 'react';

const VideoListItem = ({video,onVideoSelect}) => {
	{/*let imgUrl = video.snippet.thumbnails.default.url; */}
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div>
				<div>
					<img src={video.snippet.thumbnails.default.url} alt=""/>
				</div>
				<div>
					<p>{video.snippet.title}</p>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;
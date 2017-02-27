import React from 'react';

const VideoDetails = ({video}) => {
	if(!video){
		return (
			<div className="loading">
				Loading......
			</div>
		);
	}
	const url = `http://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="col-md-8">
		<div className="video">
			{/* <object width="640" height="360">
     			<param name="movie" value={url} />
     			<param name="allowFullScreen" value="true"/>
     			<param name="allowscriptaccess" value="always"/>
     			<embed width="640" height="360" src={url} allowscriptaccess="always" allowFullScreen="true"/>
			</object> */}
		<iframe width="640" height="360" src={url}></iframe>
		</div>
		<div className="desc">
		<h3>{video.snippet.title}</h3>
		<p>{video.snippet.description}</p>
		</div>
		</div>
	);
}
export default VideoDetails;
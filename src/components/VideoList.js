import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
	const videoItem = props.videos.map((video) =>{
		return <VideoListItem key={video.etag} video={video} />
 	});
 return (
 	<ul className='col-md-4 list-group'>
 		{videoItem}
 		{console.log(props.videos)}
 	</ul>
 );
}
export default VideoList;
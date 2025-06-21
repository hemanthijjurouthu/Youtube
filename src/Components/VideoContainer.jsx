import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }

  return(
    <div className="flex flex-wrap">
      {videos.length > 0 ? 
      videos.map((video) => <Link to={"/watch?v=" + video.id}>
                                <VideoCard key={video.id} info={video}/>
                            </Link>) : 
      <p>Loading...</p>}
    </div>
  )
}

export default VideoContainer
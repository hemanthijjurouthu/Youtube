import React from 'react'

const VideoCard = ({info}) => {
  console.log(info);
  console.log(info.snippet);
  console.log(info.statistics);
  console.log(info.snippet.channelTitle);
  console.log(info.snippet.title);
  console.log(info.snippet.thumbnails);
  const {channelTitle,title,thumbnails} = info.snippet;


  return (
    <div className="p-2 m-2 w-56 shadow-lg">
      <img className="rounded-lg" alt="thumbnails" src={thumbnails.medium.url}/>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{info.statistics.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard
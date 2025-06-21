import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  })

  return (
    <div className="flex mt-2">
        <div>
          <div className="px-5">  
            <iframe 
              width="800" 
              height="400" 
              src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <div>
            <CommentContainer />
          </div>
      </div>
      <div>
        <LiveChat/>
      </div>
  </div>
  );
}

export default WatchPage
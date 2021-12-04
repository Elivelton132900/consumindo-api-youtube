import React from "react";
import VideoItem from '../VideoItem/VideoItem'
import './videolist.css'

const VideoList = (props) => {

    return (
        
        <div className="videoList">
            {props.videos.map((videos) => {
                return (
                    <VideoItem
                        aoSelecionar={props.aoSelecionar}
                        videos={videos}
                    />
                )
            })}
        </div>
    )

}

export default VideoList
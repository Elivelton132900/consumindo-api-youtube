import React from "react";
import './videoitem.css'

const VideoItem = (props) => {

    return (
        <div className="containervideoitem" onClick={() => props.aoSelecionar(props.videos)}>
            <img src={props.videos.snippet.thumbnails.default.url} alt={props.videos.snippet.title}/>
            <h3>{props.videos.snippet.title}</h3>
        </div>
    )
}

export default VideoItem
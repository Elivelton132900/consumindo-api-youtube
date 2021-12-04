import React from "react";

const VideoDetail = (props) => {

    if (props.videoSelecionado !== null) {
        return (
            <div className="iframe">
                <iframe width="510" height="350" src={`https://www.youtube.com/embed/${props.videoSelecionado.id.videoId}`} title="Iframe"></iframe>
            </div>
        )
    } else {
        return <div className="iframe"></div>
    }

}

export default VideoDetail
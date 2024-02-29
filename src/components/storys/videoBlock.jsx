import StorysPreview from "./storyesPreview";
import React, {useEffect, useRef} from "react";

const VideoBlock = ({url,isPause,activeVideoRef, isMuted, isPlaying}) => {
    const videoRef = useRef();
    useEffect(() => {
         const video = videoRef.current;
         if (video && isPlaying) {
             activeVideoRef.current = video;
             video.currentTime = 0;
             video.play();
         } else if (video) {
             video.pause();
         }
    }, [isPlaying]);
    useEffect(()=>{
        if(isPause &&  videoRef.current)
            videoRef.current.pause();
        else  if(videoRef.current)
            videoRef.current.play();
    },[isPause])
    if(!isPlaying)
        return "";
    return (
        <video
            className="storys-video"
            preload="metadata"
            loop
            ref={videoRef}
            playsInline
            autoPlay
            no-controls="true"
            muted={isMuted}
            style={{
                backgroundImage: "url('12312313.jpeg')",
                objectFit: "cover",
            }}
        >
            <source src={url}/>
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoBlock;

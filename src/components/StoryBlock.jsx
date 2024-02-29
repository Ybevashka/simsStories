import React, {useEffect, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules";
import VideoBlock from "./storys/videoBlock";

const StoryBlock = ({media,isPause,activeVideoRef,index,activeStory,state,activePage,isOpen,isMuted,videoRef}) => {
    const [oldPage,setOldPage] = useState(null)
    const swiperRef = useRef();
    useEffect(()=>{
        if(activeStory === index){
            if(oldPage === null)
                setOldPage(activePage);
            /*else if(activePage === 0 && oldPage > activePage){
                setOldPage(0)
                swiperRef.current.slideTo(0);
            }*/
            else if(oldPage > activePage){
                //prev
                setOldPage(activePage)
                swiperRef.current.slidePrev();
            }
            else if(oldPage < activePage){
                //nextPage
                setOldPage(activePage)
                swiperRef.current.slideNext();
            }
        }
    },[activePage])
    useEffect(()=>{
        if(activeStory === index && oldPage !== activePage){
            setOldPage(0)
            swiperRef.current.slideTo(0);
        }
    },[activeStory])
    return (
        <div>
            <Swiper
                onSwiper={ref=>swiperRef.current = ref}
                freeMode={{
                    enabled: true
                }}
                onTouchEnd={() => {}}
                modules={[FreeMode]}
                onTouchStart={() => {}}
                spaceBetween={0}
                slidesPerView={1}
                className={"slider"}
            >
                {media.map((x, k) => {
                    return  (
                        <SwiperSlide
                            onTouchEnd={() => {}}
                            className={"slider-slide"}
                            key={k}
                        >
                            {x.type === "photo" ?
                                <div className={"story-block-img"}>
                                    <img key={k} src={x.url}/>
                                </div>
                                :
                                <VideoBlock isPause={isPause} activeVideoRef={activeVideoRef}
                                            url={x.url} isMuted={isMuted}
                                            isPlaying={activeStory === index && activePage === k}/>
                            }
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
};

export default StoryBlock;

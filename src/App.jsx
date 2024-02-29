import Comments from "./components/comments/Comments";
import Content from "./components/Content";
import TopBar from "./components/TopBar";
import React, {useEffect, useRef, useState} from "react";
import Storys from "./components/storys/storys";
import StoryBlock from "./components/StoryBlock";
// import Swiper JS
import {FreeMode} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
// import Swiper styles
import 'swiper/css';

export default function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(0)
    const [touch, setTouch] = useState(false)
    const [activeStory, setActiveStory] = useState(null)//Активная история
    const [activePage, setActivePage] = useState(null)//Активная страница в истории
    const [interval, setIntervalTimer] = useState(null)
    const activeVideoRef = useRef()
    const blockRef = useRef()
    const swiperRef = useRef()
    const timerRef = useRef()
    timerRef.current = timer
    const touchRef = useRef()
    touchRef.current = touch

    const activePageRef = useRef()
    const activeStoryRef = useRef()
    activePageRef.current = activePage
    activeStoryRef.current = activeStory

    const dataStories = [
        {
            imageUrl: "https://thesimstree.com/blog/articles/25-01-24/obustroistvo-doma2.png",
            title: "How it use?",
            subtitle: "subtitle",
            media: [
                {
                    type: "video",
                    url: "video.MOV"
                },
                {
                    type: "video",
                    url: "video2.MOV"
                },

            ],
        },
        {
            imageUrl: "https://thesimstree.com/blog/articles/25-01-24/image2.jpg",
            title: "Good News!",
            subtitle: "subtitle",
            media: [
                {
                    type: "video",
                    url: "video.MOV"
                },
                {
                    type: "photo",
                    url: "https://learnersbucket.com/ezoimgfmt/i0.wp.com/learnersbucket.com/wp-content/uploads/2023/09/Percentage-between-two-numbers-in-JavaScript1.png?w=1280&ssl=1&ezimgfmt=ngcb1/notWebP"
                },

            ],
        },
        {
            imageUrl: "https://thesimstree.com/blog/articles/25-01-24/unusual-houses.png",
            title: "How create",
            subtitle: "subtitle",
            media: [
                {
                    type: "video",
                    url: "video.MOV"
                },
            ],
        },
        {
            imageUrl: "https://thesimstree.com/blog/articles/25-01-24/sn.png",
            title: "Ubdates",
            subtitle: "subtitle",
            media: [
                {
                    type: "video",
                    url: "video.MOV"
                },

            ],
        },
        {
            imageUrl: "https://static.tildacdn.com/stor3066-6637-4635-b235-306432393236/28942791.jpg",
            title: "О продукте 5",
            subtitle: "subtitle",
            media: [
                {
                    type: "video",
                    url: "video.MOV"
                },

            ],
        },
        {
            imageUrl: "https://static.tildacdn.com/stor3066-6637-4635-b235-306432393236/28942791.jpg",
            title: "О продукте 6",
            subtitle: "subtitle",
            media: [
                {
                    type: "video",
                    url: "video.MOV"
                },
            ],

        },
    ];


    // Функция для переключения состояния видимости
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);
    const sourceRef = useRef(null);


    const toggleMute = () => {
            setIsMuted(!isMuted);
    };
    const closeStories = () => setActiveStory(null)
    const getPercentOfLook = (timer, duration) => {
        return Math.ceil(timer / (duration) * 100);
    }
    useEffect(()=>{
        if(activeStory !== null && activePage !== null){
            setTimer(0)
        }
    },[activeStory,activePage])
    const nextPageOrStory = () => {
        if ((dataStories[activeStoryRef.current].media.length - 1) > activePageRef.current)
            setActivePage(p => p + 1)
        else if ((dataStories.length - 1) > activeStoryRef.current) {
            swiperRef.current.slideNext();
            setActivePage(0)
            setActiveStory(s => s + 1)
        } else closeStories();
    }
    const prevPageOrStory = () => {
        if (activePage > 0) {
            setActivePage(p => p - 1);
        } else if (activeStory > 0) {
            swiperRef.current.slidePrev();
            setActivePage(0)
            setActiveStory(s => s - 1);
        } else closeStories();
    }
    useEffect(() => {
        if (activeStory === null && interval) {
            setTimer(0)
            clearInterval(interval)
            setIntervalTimer(null)
        } else if (activeStory !== null && !interval) {
            const intervalTimer = setInterval(() => {
                if (touchRef.current || isVisible) {
                    return;
                }
                if (
                    dataStories[activeStory].media[activePage].type === "video" &&
                    activeVideoRef.current &&
                    getPercentOfLook(timerRef.current, activeVideoRef.current.duration) >= 100
                ) {
                    nextPageOrStory()
                } else if (
                    dataStories[activeStory].media[activePage].type !== "video" &&
                    activeVideoRef.current && timerRef.current >= 100
                ) {
                    nextPageOrStory();
                } else {
                    setTimer(v => v + .1);
                }
            }, 100)
            setIntervalTimer(intervalTimer)
        }
    }, [activeStory])


    const openStory = (story) => {
        setTimer(0)
        setActivePage(0);
        setActiveStory(story)
        swiperRef.current.slideTo(story)
    }
    useEffect(()=>{
        if(!isVisible)
            setTouch(false);
    },[isVisible])
    const touchDown = e =>{
        let target = e.target;
        if (
            target.parentElement.className === "storys-content-right" ||
            target.parentElement.parentElement.className === "storys-content-right" ||
            isVisible
        ) {
            return;
        }
        setTouch(true)
    }
    const checkClick = (e) => {
        let target = e.target;
            if (
                target.parentElement.className === "storys-content-right" ||
                target.parentElement.parentElement.className === "storys-content-right" ||
                isVisible
            ) {
                return;
            }
        let trg = blockRef.current.getBoundingClientRect();
        let x = e.clientX - trg.left; //x position within the element.

        if (x > (trg.width - 50)) {
            nextPageOrStory();
        } else if (x < 50) {
            prevPageOrStory();
        }
        setTouch(false);
    }

    return (
        <div className="App">
            <Storys openStory={openStory} dataStorys={dataStories}/>
            <div className={`storys-overlay-box ${activeStory !== null ? '' : "d-none"}`}>
                <div
                    onPointerDown={touchDown}
                    onPointerUp={checkClick}
                    className="storys-content-box">
                    <TopBar story={activeStory !== null && dataStories[activeStory]} activePage={activePage}
                            progresses={activeStory !== null && dataStories[activeStory].media}
                            timer={
                                activeVideoRef.current ?
                                    getPercentOfLook(timer, activeVideoRef.current.duration)
                                    :
                                    timer
                            }
                            closeStory={closeStories}/>
                    <Content
                        onClick={toggleVisibility}
                        isMuted={isMuted}
                        onToggleMute={toggleMute}
                    />

                    {isVisible && <Comments onClick={toggleVisibility}/>}


                    <Swiper
                        ref={blockRef}
                        onSwiper={ref => swiperRef.current = ref}
                        freeMode={{
                            enabled: true
                        }}
                        onTouchEnd={() => {
                        }}
                        modules={[FreeMode]}
                        onTouchStart={() => {
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        className={"slider"}
                    >
                        {dataStories.map((x, k) => (
                            <SwiperSlide
                                onTouchEnd={() => {
                                }}
                                className={"slider-slide"}
                                key={k}
                            >
                                <StoryBlock isPause={isVisible || touch} activeVideoRef={activeVideoRef}
                                            activeStory={activeStory}
                                            index={k}
                                            key={k}
                                            videoRef={videoRef} isMuted={isMuted}
                                            isOpen={k === activeStory} media={x.media} activePage={activePage}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    );
}

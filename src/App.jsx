import Comments from "./components/comments/Comments";
import Content from "./components/Content";
import TopBar from "./components/TopBar";
import React, {useState, useRef, useEffect} from "react";
import Storys from "./components/storys/storys";

export default function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(0)
    const [touch, setTouch] = useState(false)
    const [activeStory, setActiveStory] = useState(null)//Активная история
    const [activePage, setActivePage] = useState(null)//Активная страница в истории
    const [interval, setIntervalTimer] = useState(null)
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
            media: ["video.MOV", "video2.MOV"],
        },
        {
            imageUrl: "https://thesimstree.com/blog/articles/25-01-24/image2.jpg",
            title: "Good News!",
            media: ["video2.MOV"],
        },
        {
            imageUrl: "https://thesimstree.com/blog/articles/25-01-24/unusual-houses.png",
            title: "How create",
            media: ["video3.MOV"],
        },
        {
            imageUrl: "https://thesimstree.com/blog/articles/25-01-24/sn.png",
            title: "Ubdates",
            media: [],
        },
        {
            imageUrl: "https://static.tildacdn.com/stor3066-6637-4635-b235-306432393236/28942791.jpg",
            title: "О продукте 5",
            media: [],
        },
        {
            imageUrl: "https://static.tildacdn.com/stor3066-6637-4635-b235-306432393236/28942791.jpg",
            title: "О продукте 6",
            media: [],

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

    useEffect(() => {
        const video = videoRef.current;

        if (video && isPlaying) {
            video.play();
        } else if (video) {
            video.pause();
        }
    }, [isPlaying]);

    const toggleMute = () => {
        const video = videoRef.current;

        if (video) {
            video.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };
    const closeStories = () => setActiveStory(null)
    useEffect(() => {
        if (activeStory === null && interval) {
            setTimer(0)
            clearInterval(interval)
            setIntervalTimer(null)
        } else if (activeStory !== null && !interval) {
            const intervalTimer = setInterval(() => {
                if(touchRef.current || isVisible)
                    return;
                if (timerRef.current >= 100) {


                    setTimer(0)
                    if ((dataStories[activeStoryRef.current].media.length-1) > activePageRef.current)
                        setActivePage(p => p + 1)
                    else if ((dataStories.length-1) > activeStoryRef.current) {
                        setActivePage(0)
                        setActiveStory(s => s + 1)
                    }
                    else closeStories();

                } else {
                    setTimer(v => v + 1.5);
                }
            }, 50)
            setIntervalTimer(intervalTimer)
        }
    }, [activeStory])
    useEffect(()=>{
        if(activeStory !== null && activePage !== null){
            sourceRef.current.setAttribute('src', dataStories[activeStory].media[activePage]);

            videoRef.current.load();
            videoRef.current.play();
        }
    },[activeStory,activePage])
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    const openStory = (story) => {
        setTimer(0)
        setActivePage(0);
        setActiveStory(story)
    }
    const checkClick = (e) =>{
        let trg = videoRef.current.getBoundingClientRect();
        let x = e.clientX - trg.left; //x position within the element.
        if(x > (trg.width - 50)){
            if(dataStories[activeStory].media.length -1 > activePage)
                setActivePage(p=>p+1)
            else if(activeStory < dataStories.length-1) {
                setActivePage(0)
                setActiveStory(s => s + 1);
            }
            else closeStories();
            setTimer(0)
        }
        else if(x <  50){
            if(activePage > 0)
                setActivePage(p=>p-1);
            else if(activeStory > 0) {
                setActivePage(0)
                setActiveStory(s => s - 1);
            }
            else closeStories();
            setTimer(0)
        }
        setTouch(false);
    }
    return (
        <div className="App">
            <Storys openStory={openStory} dataStorys={dataStories}/>
            {activePage}
            <div className={`storys-overlay-box ${activeStory !== null ? '' : "d-none"}`}>
                <div
                    onPointerDown={()=>setTouch(true)}
                    onPointerUp={checkClick}
                    className="storys-content-box">
                    <TopBar activePage={activePage}
                            progresses={activeStory !== null && dataStories[activeStory].media}
                            timer={timer}
                            closeStory={closeStories}/>
                    <Content
                        onClick={toggleVisibility}
                        isMuted={isMuted}
                        onToggleMute={toggleMute}
                    />

                    {isVisible && <Comments onClick={toggleVisibility}/>}

                    <video
                        className="storys-video"
                        preload="metadata"
                        ref={videoRef}
                        loop
                        playsInline
                        autoPlay
                        no-controls="true"
                        muted={isMuted}
                        style={{
                            backgroundImage: "url('12312313.jpeg')",
                            objectFit: "cover",
                        }}
                    >
                        <source ref={sourceRef}/>
                        {/*{activeStory !== null && dataStories[activeStory].media.map((item,key)=>(
                            <source src={item} key={key}/>
                        ))}*/}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

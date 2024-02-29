import {useEffect, useState} from "react";

const TopBar = ({closeStory,story, progresses, timer,activePage}) => {
    const [progress,setProgress] = useState(0);

    const amIActiveNow = (index) => {
        if(activePage === index){
            return timer+"%";
        }else if(activePage > index)
            return "100%";
        else return 0;
    }

    return (
        <div className="storys-top-bar">
            <div className="storys-bar">
                {progresses && progresses.map((item, key) => (
                    <div className="styrys-bar-progress" key={key}>
                        <div style={{width: amIActiveNow(key)}} className="styrys-bar-progress-loader" id="progress"></div>
                    </div>
                ))}


            </div>

            <div className="storys-inform-top">
                <div className="storys-company">
                    <img src={story ? story.imageUrl.toString() : ""} alt=""/>
                    <div className="storys-company-text">
                        <span className="storys-company-header">{story && story.title}</span>
                        <span className="storys-company-description">
              {story && story.subtitle}
            </span>
                    </div>
                </div>
                <span onClick={closeStory} className="story-close">
          <img src="./img/close.png" alt=""/>
        </span>
            </div>
        </div>
    );
};

export default TopBar;

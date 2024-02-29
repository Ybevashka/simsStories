import {useEffect, useState} from "react";

const TopBar = ({closeStory, progresses, timer,activePage}) => {
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
                    <img src="12312313.jpeg" alt=""/>
                    <div className="storys-company-text">
                        <span className="storys-company-header">TheSimsTree</span>
                        <span className="storys-company-description">
              Save Your History
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

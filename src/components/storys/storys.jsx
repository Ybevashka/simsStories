import StorysPreview from "./storyesPreview";

const Storys = ({props,openStory,dataStorys}) => {


  return (
    <div className="storys-box">
      <div className="storys-head-controls">
        <h4>TST Storys</h4>
        <div className="scroll-btns">
          <span className="arrow-btn"></span>
          <span className="arrow-btn"></span>
        </div>
      </div>
      <div className="storys-contayner">
        {dataStorys.map((data, index) => (
          <StorysPreview onClick={()=>openStory(index)} key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Storys;

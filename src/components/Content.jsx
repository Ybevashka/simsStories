const Content = ({ isMuted, onToggleMute, onClick }) => {
  return (
    <div className="storys-content">
      <div className="storys-content-left"></div>
      <div className="storys-content-right">
        <div className="storys-object" onClick={onToggleMute}>
          {isMuted ? (
            <img src="./img/mute.png" alt="" />
          ) : (
            <img src="./img/unmute.png" alt="" />
          )}

          <div className="storys-icon-text">93</div>
        </div>
        <div className="storys-object">
          <img src="./img/heart-active.png" alt="" />
          <div className="storys-icon-text">654</div>
        </div>
        <div className="storys-object" onClick={onClick}>
          <img src="./img/comment.png" alt="" />
          <div className="storys-icon-text">22</div>
        </div>
        <div className="storys-object">
          <img src="./img/share.png" alt="" />
          <div className="storys-icon-text">93</div>
        </div>
      </div>
    </div>
  );
};

export default Content;

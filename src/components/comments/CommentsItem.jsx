const CommentsItem = (props) => {
    const { avatarSrc, name, time, commentText } = props.data;

    return (
        <div className="storys-comments-item">
        <div className="storys-avatar">
            <img src={avatarSrc} alt="" />
        </div>
        <div className="storys-comments-item-data">
            <div className="storys-comments-item-data-header">
            <span className="name">{name}</span>
            <span className="time">{time}</span>
            </div>
            <div className="comment-text">{commentText}</div>
        </div>
        </div>
    );
  };
  
  export default CommentsItem;
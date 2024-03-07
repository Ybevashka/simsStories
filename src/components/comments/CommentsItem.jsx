const CommentsItem = (props) => {
    const { comment,created_at } = props.data;

    return (
        <div className="storys-comments-item">
        <div className="storys-avatar">
            <img alt="" />
        </div>
        <div className="storys-comments-item-data">
            <div className="storys-comments-item-data-header">
            <span className="name"></span>
            <span className="time">{new Date(created_at).toLocaleString()}</span>
            </div>
            <div className="comment-text">{comment}</div>
        </div>
        </div>
    );
  };
  
  export default CommentsItem;
const StorysPreview = ({ onClick,imageUrl, title }) => {

    return (
        <div onClick={onClick} className="storys-preview-item" role="button">
            <div className="image-preview">
                <img src={imageUrl} alt="" />
            </div>
            <span className="title-preview">{title}</span>
        </div>
    );
  };
  
  export default StorysPreview;
  
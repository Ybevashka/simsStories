const StorysPreview = ({ onClick,see,preview, title }) => {

    return (
        <div onClick={onClick} className="storys-preview-item" role="button">
            <div className={`image-preview ${see ? '' : "image-preview-nosee"}`}>
                <img src={preview} alt="" />
            </div>
            <span className="title-preview">{title}</span>
        </div>
    );
  };
  
  export default StorysPreview;
  
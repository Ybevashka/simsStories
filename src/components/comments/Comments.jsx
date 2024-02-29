import CommentsItem from "./CommentsItem";

const Comments = (props) => {
  const commentsData = [
    {
      avatarSrc:
        "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg",
      name: "Ольга Пруфина",
      time: "45 мин.",
      commentText: "Интересная новость! Как можно оформить подписку?",
    },
    {
      avatarSrc: "./12312313.jpeg",
      name: "TheSimsTree",
      time: "1 час",
      commentText:
        "Ни чего себе, даже сложно представить что наконец-то появился такой функционал!!",
    },
    {
      avatarSrc:
        "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg",
      name: "Ольга Пруфина",
      time: "45 мин.",
      commentText: "Интересная новость! Как можно оформить подписку?",
    },
    {
      avatarSrc: "./12312313.jpeg",
      name: "TheSimsTree",
      time: "1 час",
      commentText:
        "Ни чего себе, даже сложно представить что наконец-то появился такой функционал!!",
    },
    {
      avatarSrc:
        "https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-2.jpg",
      name: "Ольга Пруфина",
      time: "45 мин.",
      commentText: "Интересная новость! Как можно оформить подписку?",
    },
    {
      avatarSrc: "./12312313.jpeg",
      name: "TheSimsTree",
      time: "1 час",
      commentText:
        "Ни чего себе, даже сложно представить что наконец-то появился такой функционал!!",
    },
    // Добавьте еще объекты данных по необходимости
  ];

  return (
    <div className="storys-comments">
      <div className="storys-comments-header">
        <h4>Комментарии </h4>
        <span onClick={props.onClick}>Закрыть</span>
      </div>

      <div className="storys-comments-body">
        {commentsData.map((comment, index) => (
          <CommentsItem key={index} data={comment} />
        ))}
      </div>

      <div className="storys-comments-footer">
        <div className="comment-field">
          <span>Введите комментарий</span>
        </div>
        <span className="comment-btn">
          <img src="./img/send-svgrepo-com.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Comments;

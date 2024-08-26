import MyBtn from "./UI/button/MyBtn";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div>
        <MyBtn 
        onClick={() => props.remove(props.post)} className="post__btns">
            Удалить</MyBtn>
      </div>
    </div>
  );
};

export default Post
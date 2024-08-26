import MyInput from "./input/MyInput";
import { useState } from "react";
import Button from "./button/MyBtn";
const PostForm = ({create}) => {

     const [post, setPost] = useState({
       id: Date.now(),
       title: "",
       body: "",
     });

      const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
          ...post,
          id: Date.now(),
        }
        create(newPost)
        setPost({ id: Date.now(), title: "", body: "" });
      };

    return (
      <>
        <form>
          <MyInput
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Название поста"
          />
          <MyInput
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
            type="text"
            placeholder="Описание поста"
          />
          <Button onClick={addNewPost}>Добавить пост</Button>
        </form>
      </>
    );
}

export default PostForm
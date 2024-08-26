import Post from "./Post"


const PostList = ({ posts, title, index, remove }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <Post remove={remove} number={index + 1} post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList
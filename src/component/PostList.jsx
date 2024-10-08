import Post from "./Post"


const PostList = ({ posts, title, index, remove }) => {
 
 if (!posts.length) { 
    return <h2 style={{ textAlign: "center" }}>Посты не найдены</h2>
  }
 
 
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
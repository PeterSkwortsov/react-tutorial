import { useMemo, useState } from "react";
import PostList from "./component/PostList";
import PostFillter from "./component/PostFillter.jsx";
import PostForm from "./component/UI/PostForm.jsx";
import MySelect from "./component/UI/select/MySelect.jsx";
import MyInput from "./component/UI/input/MyInput.jsx";
import MyModal from "./component/UI/MyModal/MyModal.jsx";
import MyBtn from "./component/UI/button/MyBtn.jsx";
function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Java Script', body: 'Джуниор' },
    { id: 2, title: 'TypeScript', body: 'Мидл' },
    { id: 3, title: 'NodeJs', body: 'Сеньр' },
  ]);
 
  const [filter, setFilter] = useState({ query: '', sort: '' })
  const [modal, setModal] = useState(false)


  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])


  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPost])


  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  

  return (
    <div className="App">
      <MyBtn onClick={() => setModal(true)}>Добавить пост</MyBtn>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
    
      <PostFillter 
        filter={filter} 
        setFilter={setFilter}
      />

      {<PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Мои посты"} />
      }
      
    </div>
  );
}




export default App;

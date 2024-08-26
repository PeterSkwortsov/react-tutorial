import { useState } from "react";
import PostList from "./component/PostList";

import PostForm from "./component/UI/PostForm.jsx";
import MySelect from "./component/UI/select/MySelect.jsx";
import MyInput from "./component/UI/input/MyInput.jsx";
function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Java Script', body: 'Джуниор' },
    { id: 2, title: 'TypeScript', body: 'Мидл' },
    { id: 3, title: 'NodeJs', body: 'Сеньр' },
  ]);
 
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQery, setSearchQery] = useState('');

  const sortedPost = [...posts].filter(post => post.title.toLowerCase().includes(searchQery.toLowerCase())) 

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort]
    .localeCompare(b[sort])))
  }

  return (
    <div className="App">
      
      <PostForm create={createPost}/>
      <hr style={{ margin: '15px 0' }}></hr>

      <div>
        <MyInput 
          placeholder="Поиск по теме"
          value={searchQery}
          onChange={e => setSearchQery(e.target.value)}
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          option={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
      ]}
      />
      </div>

      {posts.length !== 0 
        ? <PostList remove={removePost} posts={posts} title={"Posts list"} />
        : <div style={{textAlign: 'center'}}><h3>Постов не найдено!</h3></div>
    }
      
    </div>
  );
}




export default App;

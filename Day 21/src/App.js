import './App.css';
import Post from './components/Post';
import {useState} from "react";
function App() {
 const [item,setItem]= useState("");
 const [calorie,setCalorie]= useState(0);
 const [posts,setPosts]=useState([]);
 const addList=(e,item,calorie)=>{
  //  e.preventDefault();
   const newposts=[...posts,{name:item,calorie:calorie}];
   setPosts(newposts);
 };
 
  return (
    <div className="App">
      <div className="container">
          <label>ITEM
            <input type="text" placeholder="Add an item" id="1" value={item} onChange={e=>setItem(e.target.value)}/>
          </label>
          <label>CALORIE
            <input type="number" value={calorie} id="2" onChange={e=>setCalorie(e.target.value)}/>
          </label>
          <button onClick={e=>{addList(e,item,calorie); document.querySelector('input[type="text"]').value='';}}>Add Item</button>
          <div className="posts">
            {posts.map((post,index)=>
            (
              <Post key={index} post={post} posts={posts} setPosts={setPosts} index={index}/>
            ))
            }        
          </div>
      </div>
    </div>
  );
}

export default App;
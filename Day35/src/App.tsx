import React, { useEffect } from 'react';


import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import { User, updateUser } from "./actions";
export interface PostType{
  username:string;
  post:string;
}



function App() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [posts, setPosts] = React.useState<PostType[]>([]);
  useEffect(() => {
     dispatch(updateUser());
     fetch("/data/post.json")
     .then(res => res.json())
     .then(data => {
      setPosts(data); 
     });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing posts={posts} />
    </div>
  );
}

export default App;
import React from 'react'
import { useState } from 'react'
import "./Post.css"
const Post = ({post,posts,setPosts,index}) => {
    const [iseditMode,setEditMode]=useState(false)
    const postCopy = {...post};

     function handleChange(postCopy){
        let newPosts=[...posts]
        newPosts[index]=postCopy;
        setPosts(newPosts);
        
    }
    return (
        <div className="post">
            {
                iseditMode?(<input id='text' type="text" defaultValue={postCopy.name} onChange={e=>{
                    postCopy.name=e.target.value;
                }}/>):(<h2>{postCopy.name}</h2>)
            }
            {
                iseditMode?(<input type="number" defaultValue={postCopy.calorie} onChange={e=>postCopy.calorie=e.target.value}/>):(<h3>You have consumed {post.calorie} calorie</h3>)
            }
            {
                iseditMode?(<button onClick={()=>{setEditMode(false);handleChange(postCopy)}}>Save</button>):(<button onClick={(e)=>setEditMode(true)}>Edit</button>)
            }
           
           <button onClick={(e)=>{
            const newPosts=posts.filter((el,i)=>i!==index);
            setPosts(newPosts);
            }}>Delete</button>
        </div>
    )
}

export default Post

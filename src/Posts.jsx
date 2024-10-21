import { useEffect } from "react";
import { useState } from "react";
import Post from "./post";

export default function Posts(){
    let [posts,setPost] = useState([])
    useEffect ( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json() )
        .then( data => setPost(data) )
    } , [] )

return (
    <div>
        <h2>Total Posts : {posts.length}</h2>
        {posts.map(post => <Post data={post}></Post>)}
    </div>
)

}
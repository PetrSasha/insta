import { collection, onSnapshot, query,orderBy } from '@firebase/firestore';
import {useEffect, useState} from 'react'
import Post from './Post';
import {
    db ,
    storage 
    } from "../firebase"

// const posts = [
// {
//     id:'1',
//     username:'sasha',
//     userImg:'https://images.unsplash.com/photo-1634703080363-98f94e5a1076?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     img: 'https://links.papareact.com/ocw',
//     caption:'This is me'
// },
// {
//     id:'2',
//     username:'sasha',
//     userImg:'https://images.unsplash.com/photo-1634703080363-98f94e5a1076?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     img: 'https://links.papareact.com/ocw',
//     caption:'This is me lol'
// },
// ]

function Posts() {
    const[posts, setPosts] = useState([])

    useEffect ( () => 
        onSnapshot(query(collection(db,'posts'),orderBy('timestamp','desc')),snapshot => {
            setPosts(snapshot.docs)
        })
  
    ,[db])
    return (
        <div>
            {posts.map(post => (
                <Post 
                    key={post.id} 
                    id={post.id} 
                    userImg={post.data().profileImg} 
                    username={post.data().username}
                    img={post.data().image}
                    caption={post.data().caption}
                />
            ))}
            
            
        </div>
    )
}

export default Posts

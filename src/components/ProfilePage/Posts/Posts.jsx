// Import =========================
import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

// Posts Component ===================
const Posts = (props) => {

    let postsElements = props.posts.map(posts => <Post
        user={posts.userName} id={posts.id}
        message={posts.message} likesCount={posts.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <section className={style.posts}>
            <section className={style.newPost}>
                <div className={style.user}></div>
                <textarea name="newPost" id="newPost"
                          placeholder="Show me your emotions :)"
                          ref={newPostElement} value={props.newPostText}
                          onChange={onPostChange}/>
                <button className="btn" onClick={onAddPost}>Add Post</button>
            </section>
            <section className={style.myPosts}>
                <h2>Posts</h2>
                {postsElements}
            </section>
        </section>
    )
}

export default Posts;
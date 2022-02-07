// Imports =========================
import React from "react";
import style from "./NewPost.module.css";


// New Post Component =================
const NewPost = () => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <section className={style.newPost}>
            <div className={style.user}></div>
            <textarea name="newPost" id="newPost"
                      placeholder="Show me your emotions :)"
                      ref={newPostElement}></textarea>
            <button className="btn" onClick={addPost}>Add Post</button>
        </section>
    )
}

export default NewPost;
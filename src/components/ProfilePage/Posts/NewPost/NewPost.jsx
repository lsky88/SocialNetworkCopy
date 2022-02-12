// Imports =========================
import React from "react";
import style from "./NewPost.module.css";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/state";

// New Post Component =================
const NewPost = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addPost();
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <section className={style.newPost}>
            <div className={style.user}></div>
            <textarea name="newPost" id="newPost"
                      placeholder="Show me your emotions :)"
                      ref={newPostElement} value={props.newPostText}
                      onChange={onPostChange}/>
            <button className="btn" onClick={addPost}>Add Post</button>
        </section>
    )
}

export default NewPost;
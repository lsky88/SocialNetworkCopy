// Imports =========================
import style from "./NewPost.module.css";

// New Post Component =================
const NewPost = () => {
    return (
        <section className={style.newPost}>
            <div className={style.user}></div>
            <textarea name="newPost" id="newPost"
                      placeholder="Show me your emotions :)"></textarea>
            <button className="btn">Add Post</button>
        </section>
    )
}

export default NewPost;
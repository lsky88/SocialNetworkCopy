// Imports =========================
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

// My Posts ========================
const MyPosts = () => {
    return (
        <section className={style.myPosts}>
            <h2>Posts</h2>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </section>
    )
}

export default MyPosts;
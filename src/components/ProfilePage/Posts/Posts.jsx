// Imports =========================
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";

// Posts ==========================
const Posts = () => {
    return (
        <section className={style.posts}>
            <NewPost/>
            <MyPosts/>
        </section>
    )
}

export default Posts;
// Imports =========================
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";

// Posts component ===================
const Posts = (props) => {
    return (
        <section className={style.posts}>
            <NewPost/>
            <MyPosts posts={props.posts}/>
        </section>
    )
}

export default Posts;
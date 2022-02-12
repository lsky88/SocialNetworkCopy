// Imports =========================
import style from "./Posts.module.css";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";

// Posts Component ===================
const Posts = (props) => {
    return (
        <section className={style.posts}>
            <NewPost dispatch={props.dispatch}/>
            <MyPosts posts={props.posts}/>
        </section>
    )
}

export default Posts;
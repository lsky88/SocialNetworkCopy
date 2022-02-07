// Imports =========================
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

// My Posts Component =================
const MyPosts = (props) => {

    let postsElements = props.posts.map(posts => <Post user={posts.userName}
                                                       id={posts.id}
                                                       message={posts.message}
                                                       likesCount={posts.likesCount}/>)

    return (
        <section className={style.myPosts}>
            <h2>Posts</h2>
            {postsElements}
        </section>
    )
}

export default MyPosts;
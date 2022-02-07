// Imports =========================
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

// My Posts Component =================
const MyPosts = () => {

    let posts = [
        {userName: "James", id: 1, message: "Hello", likesCount: 3},
        {userName: "Sandra", id: 2, message: "What's up?", likesCount: 5},
        {userName: "Andy", id: 3, message: "Yo!", likesCount: 7},
    ];

    let postsElements = posts.map(posts => <Post user={posts.userName}
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
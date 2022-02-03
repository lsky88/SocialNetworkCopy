// Imports =========================
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

// My Posts ========================
const MyPosts = () => {
    return (
        <section className={style.myPosts}>
            <h2>Posts</h2>
            <Post  user="James" message="Hello" id="1" likesCount="3"/>
            <Post user="Sandra" message="What's up?" id="2" likesCount="5"/>
            <Post user="Andy" message="Yo" id="3" likesCount="7"/>
        </section>
    )
}

export default MyPosts;
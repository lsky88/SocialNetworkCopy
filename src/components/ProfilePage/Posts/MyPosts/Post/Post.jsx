// Imports =========================
import style from "./Post.module.css";

// Post ===========================
const Post = (props) => {
    return (
        <div className={style.postContainer}>
            <div className={style.user}></div>
            {props.user}:
            <div className={style.post} id={props.id}><p>{props.message}</p>
                <span>❤︎ {props.likesCount}</span></div>
        </div>
    )
}

export default Post;
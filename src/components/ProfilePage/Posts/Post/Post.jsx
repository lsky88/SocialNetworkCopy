// Imports =========================
import style from "./Post.module.css";

// Post Component  ===================
const Post = (props) => {
    return (
        <div className={style.postContainer}>
            <div className={style.user}>
                <img src="" alt="ava" className={style.userLogo}/>
                <div className={style.userName}>{props.user}:</div>
            </div>
            <div className={style.post} id={props.id}><p>{props.message}</p>
                <span>❤︎ {props.likesCount}</span></div>
        </div>
    )
}

export default Post;
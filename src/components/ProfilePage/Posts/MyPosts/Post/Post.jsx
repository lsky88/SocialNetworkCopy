// Imports =========================
import style from "./Post.module.css";

// Post ===========================
const Post = () => {
  return (
      <div className={style.postContainer}>
          <div className={style.user}></div>
          James:
          <div className={style.post}>Hello <span>❤︎ 5</span></div>

      </div>
  )
}

export default Post;
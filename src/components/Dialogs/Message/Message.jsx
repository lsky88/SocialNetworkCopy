// Imports =========================
import style from "./Message.module.css";

// Message Component =================
const Message = (props) => {
    return (
        <div className={style.message}>
            <div className={style.user}>
                <img src="" alt="ava" className={style.userLogo}/>
                <div className={style.userName}>Ivan</div>
            </div>
            <div className={style.messageText}>{props.message}</div>
        </div>
    )
}

export default Message;
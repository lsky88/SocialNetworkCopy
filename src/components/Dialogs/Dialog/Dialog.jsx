// Imports =========================
import style from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

// Dialog Component ==================
const Dialog = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>
                <div className={style.user}>
                    <img src="" alt="ava" className={style.userLogo}/>
                    <div className={style.userName}>{props.name}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default Dialog;
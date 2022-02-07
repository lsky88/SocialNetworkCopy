// Imports ========================
import style from './Navigation.module.css'
import {NavLink} from "react-router-dom";

// Navigation Component ===============
const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.navList}>
                <li className={style.listItem}><NavLink
                    to="/profile">Profile</NavLink></li>
                <li className={style.listItem}><NavLink to="news">News</NavLink>
                </li>
                <li className={style.listItem}><NavLink
                    to="friends">Friends</NavLink>
                </li>
                <li className={style.listItem}><NavLink
                    to="/dialogs">Messages</NavLink></li>
                <li className={style.listItem}><NavLink
                    to="music">Music</NavLink>
                </li>
                <li className={style.listItem}><NavLink
                    to="settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;
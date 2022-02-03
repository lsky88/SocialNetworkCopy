// Imports ========================
import style from './Navigation.module.css'

// Navigation =======================
const Navigation = () => {
    return (
        <nav className={style.navigation}>
            <ul className={style.navList}>
                <li className={style.listItem}>Profile</li>
                <li className={style.listItem}>News</li>
                <li className={style.listItem}>Friends</li>
                <li className={style.listItem}>Messages</li>
                <li className={style.listItem}>Music</li>
                <li className={style.listItem}>Settings</li>
            </ul>
        </nav>
    )
}

export default Navigation;
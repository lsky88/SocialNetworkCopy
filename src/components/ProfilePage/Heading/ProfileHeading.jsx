// Imports ========================
import style from "./ProfileHeading.module.css";

// Profile Heading ===================
const ProfileHeading = () => {
    return (
        <section className={style.profilePageHeading}>
            <div className={style.profilePageCover}></div>
            <div className={style.profilePageUser}>
                <h1>John Smith</h1>
                <button className="btn">Edit Profile</button>
            </div>
            <nav className={style.profilePageMenu}>
                <ul>
                    <li>Posts</li>
                    <li>About</li>
                    <li>Music</li>
                    <li>Friends</li>
                    <li>Photos</li>
                </ul>
            </nav>
        </section>
    )
}

export default ProfileHeading;
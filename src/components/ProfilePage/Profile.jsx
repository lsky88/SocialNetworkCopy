// Imports =========================
import style from './Profile.module.css'
import ProfileHeading from "./Heading/ProfileHeading";
import Posts from "./Posts/Posts";


// Profile ==========================
const Profile = () => {
    return (
        <section className={style.profilePage}>
            <ProfileHeading/>
            <Posts/>
        </section>
    )
}

export default Profile;
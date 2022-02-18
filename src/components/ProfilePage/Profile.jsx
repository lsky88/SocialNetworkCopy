// Imports =========================
import style from './Profile.module.css'
import ProfileHeading from "./Heading/ProfileHeading";
import PostsContainer from "./Posts/PostsContainer";

// Profile Component ==================
const Profile = () => {
    return (
        <section className={style.profilePage}>
            <ProfileHeading/>
            <PostsContainer/>
        </section>
    )
}

export default Profile;
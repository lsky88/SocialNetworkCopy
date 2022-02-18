// Imports =========================
import style from './Profile.module.css'
import ProfileHeading from "./Heading/ProfileHeading";
import PostsContainer from "./Posts/PostsContainer";

// Profile Component ==================
const Profile = (props) => {
    return (
        <section className={style.profilePage}>
            <ProfileHeading/>
            <PostsContainer store={props.store}/>
        </section>
    )
}

export default Profile;
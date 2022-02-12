// Imports =========================
import style from './Profile.module.css'
import ProfileHeading from "./Heading/ProfileHeading";
import Posts from "./Posts/Posts";

// Profile Component ==================
const Profile = (props) => {
    return (
        <section className={style.profilePage}>
            <ProfileHeading/>
            <Posts posts={props.profilePage.posts}
                   newPostText={props.profilePage.newPostText}
                   dispatch={props.dispatch}
            />
        </section>
    )
}

export default Profile;
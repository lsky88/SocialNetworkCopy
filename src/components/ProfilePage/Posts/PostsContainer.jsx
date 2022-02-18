// Import =========================
import {addPostAC, updateNewPostTextAC}
    from "../../../redux/profile-reducer";
import Posts from "./Posts";

//  Posts Container Component ============
const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAC());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextAC(text);
        props.store.dispatch(action);
    }

    return <Posts updateNewPostText={onPostChange} addPost={addPost}
                  posts={state.profilePage.posts}
                  newPostText={state.profilePage.newPostText}/>
}

export default PostsContainer;
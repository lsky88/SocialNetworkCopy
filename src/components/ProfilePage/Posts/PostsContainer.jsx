// Import =========================
import {addPostAC, updateNewPostTextAC}
    from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

//  Posts Container Component ============
const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let addPost = () => {
                        store.dispatch(addPostAC());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextAC(text);
                        store.dispatch(action);
                    }

                    return <Posts updateNewPostText={onPostChange}
                                  addPost={addPost}
                                  posts={store.getState().profilePage.posts}
                                  newPostText={store.getState().profilePage.newPostText}/>
                }
            }
        </StoreContext.Consumer>
    )
}

export default PostsContainer;
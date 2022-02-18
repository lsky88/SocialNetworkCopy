const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// Initial State ======================
let initialState = {
    posts: [
        {userName: "James", id: 1, message: "Hello", likesCount: 3},
        {
            userName: "Sandra",
            id: 2,
            message: "What's up?",
            likesCount: 5
        },
        {userName: "Andy", id: 3, message: "Yo!", likesCount: 7},
    ],
    newPostText: ""
}

// Profile Reducer ====================
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                userName: "Alex",
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

// Action Creators ====================
export const addPostAC = () => ({type: ADD_POST});

export const updateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;
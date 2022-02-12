const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';


// Store ===========================
let store = {
    _state: {
        // Dialogs Page Data ==================
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Ivan"},
                {id: 2, name: "Maria"},
                {id: 3, name: "Jose"},
                {id: 4, name: "Danny"},
                {id: 5, name: "Hans"},
            ],

            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "Hello :)"},
                {id: 3, message: "What are you doing?"}
            ],

            newMessageBody: ""
        },

        // Profile Page Data ==================
        profilePage: {
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
            newPostText: "lol"
        }
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    // Add Post ========================
    _addPost() {
        let newPost = {
            userName: "Alex",
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    // Update New Post Text ================
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    // Send Message =====================
    _sendMessage() {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = '';
        this._state.dialogsPage.messages.push({id: 5, message: body})
        this._callSubscriber(this._state)
    },

    // Update New Message Body ============
    _updateNewMessageBody(newMessageBody) {
        this._state.dialogsPage.newMessageBody = newMessageBody;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._updateNewMessageBody(action.body)
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage()
        }
    }
};

// Action Creators ====================
export const addPostAC = () => ({type: ADD_POST});

export const updateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageAC = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyAC = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default store;
window.store = store;
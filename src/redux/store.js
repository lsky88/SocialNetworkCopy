// Import =========================
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
            newPostText: ""
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;
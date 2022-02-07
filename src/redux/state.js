// State JS =========================
let state = {

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

        myMessages: [
            {id: 1, message: "=)"},
            {id: 2, message: "o_O"},
            {id: 3, message: ":("}
        ]
    },

    profilePage: {
        posts: [
            {userName: "James", id: 1, message: "Hello", likesCount: 3},
            {userName: "Sandra", id: 2, message: "What's up?", likesCount: 5},
            {userName: "Andy", id: 3, message: "Yo!", likesCount: 7},
        ]
    }
}

export default state;
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

// Initial State ======================
let initialState = {
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
}

// Dialogs Reducer ====================
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default:
            return state;
    }
}

// Action Creators ====================
export const sendMessageAC = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyAC = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;
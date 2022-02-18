// Import =========================
import {sendMessageAC, updateNewMessageBodyAC}
    from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// Dialogs Page Container Component ========
const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyAC(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick} dialogsPage={state}/>
}

export default DialogsContainer;

// Import =========================
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/dialogs-reducer";

// DialogsPage Component =================
const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <Dialog
        name={dialog.name} id={dialog.id}/>);
    let messagesElements = state.messages.map(message => <Message
        message={message.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onSendMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <section className={style.dialogs}>
            <section className={style.dialogsList}>
                {dialogsElements}
            </section>
            <section className={style.messagesContainer}>
                <section className={style.messagesList}>
                    {messagesElements}
                </section>
                <section className={style.newMessage}>
                    <textarea placeholder="Enter your message"
                              value={newMessageBody}
                              onChange={onSendMessageChange}/>
                    <button className="btn" onClick={onSendMessageClick}>Send
                    </button>
                </section>
            </section>
        </section>
    )
}

export default Dialogs;

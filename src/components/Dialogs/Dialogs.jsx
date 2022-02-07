// Imports =========================
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

// Dialogs Component =================
const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(dialogs => <Dialog
        name={dialogs.name}
        id={dialogs.id}/>)

    let messagesElements = props.messages.map(messages => <Message
        message={messages.message} id={messages.id}/>)

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
                        <textarea name="new" id="newPost"
                                  placeholder="Type your message here :)"></textarea>
                    <button className="btn">Send</button>
                </section>
            </section>
        </section>
    )
}

export default Dialogs;

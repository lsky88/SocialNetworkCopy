// Imports =========================
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

// DialogsPage Component =================
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialogs => <Dialog
        name={dialogs.name}
        id={dialogs.id}/>)

    let messagesElements = props.state.messages.map(messages => <Message
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
                <NewMessage/>
            </section>
        </section>
    )
}

export default Dialogs;

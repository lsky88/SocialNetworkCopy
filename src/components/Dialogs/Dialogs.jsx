// Imports =========================
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

// Dialogs Component =================
const Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <section className={style.dialogsList}>
                <Dialog name="Ivan" id="1"/>
                <Dialog name="Maria" id="2"/>
                <Dialog name="Jose" id="3"/>
                <Dialog name="Danny" id="4"/>
                <Dialog name="Hans" id="5"/>
            </section>
            <section className={style.messagesContainer}>
                <section className={style.messagesList}>
                    <Message message="Hi!"/>
                    <Message message="Hello :)"/>
                    <Message message="What's up, bro?!"/>
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

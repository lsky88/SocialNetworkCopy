// Imports =========================
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

// Dialogs Component =================
const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Jose"},
        {id: 4, name: "Danny"},
        {id: 5, name: "Hans"},
    ]

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hello :)"},
        {id: 3, message: "What are you doing?"}
    ];

    let dialogsElements = dialogs.map(dialogs => <Dialog name={dialogs.name}
                                                         id={dialogs.id}/>)

    let messagesElements = messages.map(messages => <Message
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

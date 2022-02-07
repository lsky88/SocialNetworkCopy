// Imports =========================
import React from "react";
import style from "./NewMessage.module.css";

// New Message Component ==============
const NewMessage = () => {

    let newMessageText = React.createRef();

    let sendMessage = () => {
        let text = newMessageText.current.value;
        alert(text)
    }

    return (
        <section className={style.newMessage}>
                        <textarea name="newMessage" id="newMessage"
                                  placeholder="Type your message here :)"
                                  ref={newMessageText}></textarea>
            <button className="btn" onClick={sendMessage}>Send</button>
        </section>
    )
}

export default NewMessage;
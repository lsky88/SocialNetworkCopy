// Imports =========================
import style from "./Dialogs.module.css"

// Dialogs =========================
const Dialogs = (props) => {
    return (
        <section className={style.dialogs}>
            <section className={style.dialogsList}>
                <div className={style.dialog}>
                    <div className={style.user}>
                        <img src="" alt="ava" className={style.userLogo}/>
                        <div className={style.userName}>Ivan</div>
                    </div>
                </div>
                <div className={style.dialog}>
                    <div className={style.user}>
                        <img src="" alt="ava" className={style.userLogo}/>
                        <div className={style.userName}>Jessica</div>
                    </div>
                </div>
                <div className={style.dialog}>
                    <div className={style.user}>
                        <img src="" alt="ava" className={style.userLogo}/>
                        <div className={style.userName}>Jose</div>
                    </div>
                </div>
            </section>
            <section className={style.messagesContainer}>
                <section className={style.messagesList}>
                    <div className={style.message}>
                        <div className={style.user}>
                            <img src="" alt="ava" className={style.userLogo}/>
                            <div className={style.userName}>Ivan :</div>
                        </div>
                        <p>Yo, Bro</p>
                    </div>
                    <div className={style.myMessage} >
                        <p>Hello! :)</p>
                        <div className={style.user}>
                            <img src="" alt="ava" className={style.userLogo}/>
                        </div>

                    </div>
                    <div className={style.message}>
                        <div className={style.user}>
                            <img src="" alt="ava" className={style.userLogo}/>
                            <div className={style.userName}>Ivan</div>
                        </div>
                        <p>Wassup!</p>
                    </div>
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

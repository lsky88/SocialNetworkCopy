// Import =========================
import {sendMessageAC, updateNewMessageBodyAC}
    from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

// Dialogs Page Container Component ========
const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageAC());
            }

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyAC(body));
            }

            return (<Dialogs updateNewMessageBody={onNewMessageChange}
                             sendMessage={onSendMessageClick}
                             dialogsPage={store.getState().dialogsPage}/>)
        }}
    </StoreContext.Consumer>
}

export default DialogsContainer;

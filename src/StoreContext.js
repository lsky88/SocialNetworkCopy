// Import =========================
import React from "react";

// Store Context ====================
const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContext;
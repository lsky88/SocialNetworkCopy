// Imports ========================
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Profile from "./components/ProfilePage/Profile";
import Dialogs from "./components/DialogsPage/Dialogs";
import {Routes, Route} from "react-router-dom";

// App ===========================
const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="container">
                <section className="sidebar">
                    <Navigation/>
                    <Footer/>
                </section>
                <main className="main">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile
                                   state={props.state.profilePage}/>}/>
                        <Route path="/dialogs"
                               element={<Dialogs
                                   state={props.state.dialogsPage}/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;

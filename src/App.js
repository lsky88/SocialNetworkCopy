// Import ========================
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Profile from "./components/ProfilePage/Profile";
import {Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/DialogsPage/DialogsContainer";

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
                        <Route path="/profile" element={<Profile
                            store={props.store}/>}/>
                        <Route path="/dialogs" element={<DialogsContainer
                            store={props.store}/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;

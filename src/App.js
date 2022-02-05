// Imports ========================
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Profile from "./components/ProfilePage/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

// App ===========================
const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="container">
                    <section className="sidebar">
                        <Navigation/>
                        <Footer/>
                    </section>
                    <main className="main">
                        <Routes>
                            <Route element={<Dialogs/>} path="/dialogs"/>
                            <Route element={<Profile/>} path="/profile"/>
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
